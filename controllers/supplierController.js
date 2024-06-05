import Supplier from '../models/Supplier.js';

export const createSupplier = async (req, res) => {
  const { name } = req.body;
  try {
    const supplier = new Supplier({ name });
    await supplier.save();
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
