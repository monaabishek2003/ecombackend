// controllers.js
import Specification from '../models/Specification.js';

// Controller to add a new specification
export const addSpecification = async (req, res) => {
  const { specification_name, is_range, range, list_of_values, category_id } = req.body;
  
  try {
    const specification = new Specification({
      specification_name,
      is_range,
      range,
      list_of_values,
      category_id
    });

    await specification.save();
    res.status(201).json({ message: 'Specification added successfully', specification });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get specifications by category ID
export const getSpecificationsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  
  try {
    const specifications = await Specification.find({ category_id: categoryId });
    res.json(specifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
