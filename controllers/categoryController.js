import Category from "../models/Category.js";

const buildCategoryTree = (categories) => {
  const categoryMap = {};

  // Initialize each category in the map with an empty nestedcategory array
  categories.forEach(category => {
    categoryMap[category._id] = { ...category._doc, nestedcategory: [] };
  });

  const tree = [];

  categories.forEach(category => {
    if (category.parent_category) {
      const parentCategory = categoryMap[category.parent_category];
      if (parentCategory) {
        parentCategory.nestedcategory.push(categoryMap[category._id]);
      }
    } else {
      tree.push(categoryMap[category._id]);
    }
  });

  return tree;

};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate('sub_categories')
      .populate('child_categories');
    const categoryTree = buildCategoryTree(categories);
    console.log(categories)
    res.status(200).json(categoryTree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addNewCategory = async (req, res) => {
  const { parentId, name, level } = req.body;
  try {
    let newCategory = new Category({ name });

    if (parentId) {
      const parentCategory = await Category.findById(parentId);
      if (!parentCategory) {
        return res.status(404).json({ message: 'Parent category not found' });
      }

      newCategory.parent_category = parentCategory._id;
      await newCategory.save();

      if (level === 'sub') {
        parentCategory.sub_categories.push(newCategory._id);
      } else if (level === 'child') {
        parentCategory.child_categories.push(newCategory._id);
      }

      await parentCategory.save();
    } else {
      await newCategory.save();
    }

    // Generate category_id if it has all three levels
    if (newCategory.parent_category) {
      const parent = await Category.findById(newCategory.parent_category);
      if (parent && parent.parent_category) {
        const grandParent = await Category.findById(parent.parent_category);
        if (grandParent) {
          newCategory.category_id = `${grandParent.name}-${parent.name}-${newCategory.name}`;
          await newCategory.save();
        }
      }
    }

    res.status(201).json({ message: 'New category added successfully', categoryId: newCategory._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


