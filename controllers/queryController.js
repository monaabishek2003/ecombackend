import Query from '../models/Query.js';
import Product from '../models/Product.js';
import User from "../models/User.js"

// Controller to post a new query
export const postQuery = async (req, res) => {
  const { userId, productId, query } = req.body;
  try {
    let newQuery = new Query({
      user: userId,
      product: productId,
      query
    });

    // Associate the query with the supplier if the productId is provided
    if (productId) {
      const product = await Product.findById(productId).populate('supplier_id');
      if (product) {
        newQuery.supplier = product.supplier_id;
      }
    }

    await newQuery.save();
    res.status(201).json({ message: 'Query posted successfully', queryId: newQuery });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to respond to a query
export const respondToQuery = async (req, res) => {
  const { queryId, supplierId, response } = req.body;
  try {
    const query = await Query.findById(queryId);
    if (!query) {
      return res.status(404).json({ message: 'Query not found' });
    }
    query.responses.push({ supplier: supplierId, response });
    await query.save();
    res.status(200).json({ message: 'Response added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get all queries (optionally filtered by product or supplier)
export const getQueries = async (req, res) => {
  const { productId,supplierId } = req.query;
  const filter = {}
  if (supplierId) {
    filter.supplier = supplierId;
  } else if (productId) {
    filter.product = productId;
  }
  try {
    const queries = await Query.find(filter)
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


