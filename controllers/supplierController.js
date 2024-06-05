import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Supplier from "../models/Supplier.js";

export const registerSupplier = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingSupplier = await Supplier.findOne({ email });
    if (existingSupplier) {
      return res
        .status(400)
        .json({ message: "Supplier already exists with this email" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new supplier
    const newSupplier = await Supplier.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { email: newSupplier.email, id: newSupplier._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ supplier: newSupplier, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to register supplier", error: error.message });
  }
};

export const loginSupplier = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find supplier with given email
    const existingSupplier = await Supplier.findOne({ email });
    if (!existingSupplier) {
      return res
        .status(404)
        .json({ message: "Supplier not found with this email" });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingSupplier.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: existingSupplier.email, id: existingSupplier._id },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ supplier: existingSupplier, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to login supplier", error: error.message });
  }
};
