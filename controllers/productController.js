import Product from "../models/Product.js";
import Specification from "../models/Specification.js";

export const createProduct = async (req, res) => {
  const {
    supplier_id,
    name,
    descriptive_name,
    brand,
    UPIN,
    price,
    available_offers,
    detailed_description,
    ratings,
    manufacturer,
    quantity,
    category_id,
    specifications,
  } = req.body;

  try {
    const product = new Product({
      supplier_id,
      name,
      descriptive_name,
      brand,
      UPIN,
      price,
      available_offers,
      detailed_description,
      ratings,
      manufacturer,
      quantity,
      category_id,
      specifications,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const filterProducts = async (req, res) => {
  const { categoryId, specifications } = req.body;

  if (!categoryId || !specifications) {
    return res
      .status(400)
      .json({ error: "CategoryId and specifications are required" });
  }

  try {
    // Fetch products with the given category_id
    const products = await Product.find({ category_id: categoryId });

    // Initialize an empty list to store the filtered products
    const filteredProducts = [];

    // Iterate over each product
    products.forEach((product) => {
      let matches = 0;
      // Iterate over each specification
      specifications.forEach((specification) => {
        // Find the specification in the product's specifications
        const productSpecification = product.specifications.find(
          (spec) =>
            spec.specification_id.toString() === specification.specificationId
        );
        // Check if the product has a value for the current specification and it matches the filter value
        if (
          productSpecification &&
          productSpecification.value === specification.value
        ) {
          matches++;
        }
      });

      // If the product matches at least one specification, add it to the list
      if (matches > 0) {
        filteredProducts.push({ product, matches });
      }
    });

    // Sort the filtered products by the number of matches in descending order
    filteredProducts.sort((a, b) => b.matches - a.matches);

    res.status(200).json(filteredProducts.map((fp) => fp.product));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { supplier_id, category_id } = req.query;
    const filter = {};

    if (category_id) {
      filter.category_id = category_id;
    } else if (supplier_id) {
      filter.supplier_id = supplier_id;
    }
    // console.log(filter);
    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchProducts = async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const products = await Product.find({
      name: { $regex: keyword, $options: "i" },
    });
    if (!products) {
      return res.status(404).json({ error: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
