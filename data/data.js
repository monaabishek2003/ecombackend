import mongoose from "mongoose";
const Types =  mongoose.Types;

export const categories = [
    // Parent Category 1: Electronics
    {
        _id: new Types.ObjectId('665e98ae0e46df9f49846576'),
        name: 'Electronics',
        parent_category: null,
        sub_categories: [
            new Types.ObjectId('665e98f70e46df9f49846578'),
            new Types.ObjectId('665e98f70e46df9f49846579'),
            new Types.ObjectId('665e98f70e46df9f49846580')
        ],
        child_categories: [],
        __v: 1
    },
    // Subcategories for Electronics
    {
        _id: new Types.ObjectId('665e98f70e46df9f49846578'),
        name: 'Mobile Devices',
        parent_category: new Types.ObjectId('665e98ae0e46df9f49846576'),
        sub_categories: [],
        child_categories: [
            new Types.ObjectId('665e99460e46df9f4984657d'),
            new Types.ObjectId('665e99460e46df9f4984657e'),
            new Types.ObjectId('665e99460e46df9f4984657f'),
            new Types.ObjectId('665e99460e46df9f49846580'),
            new Types.ObjectId('665e99460e46df9f49846581')
        ],
        __v: 1
    },
    {
        _id: new Types.ObjectId('665e98f70e46df9f49846579'),
        name: 'Computers',
        parent_category: new Types.ObjectId('665e98ae0e46df9f49846576'),
        sub_categories: [],
        child_categories: [
            new Types.ObjectId('665e99460e46df9f49846582'),
            new Types.ObjectId('665e99460e46df9f49846583'),
            new Types.ObjectId('665e99460e46df9f49846584'),
            new Types.ObjectId('665e99460e46df9f49846585'),
            new Types.ObjectId('665e99460e46df9f49846586')
        ],
        __v: 1
    },
    {
        _id: new Types.ObjectId('665e98f70e46df9f49846580'),
        name: 'Accessories',
        parent_category: new Types.ObjectId('665e98ae0e46df9f49846576'),
        sub_categories: [],
        child_categories: [
            new Types.ObjectId('665e99460e46df9f49846587'),
            new Types.ObjectId('665e99460e46df9f49846588'),
            new Types.ObjectId('665e99460e46df9f49846589'),
            new Types.ObjectId('665e99460e46df9f49846590'),
            new Types.ObjectId('665e99460e46df9f49846591')
        ],
        __v: 1
    },
    // Child categories for Mobile Devices
    {
        _id: new Types.ObjectId('665e99460e46df9f4984657d'),
        name: 'Smartphones',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846578'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Mobile Devices-Smartphones'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f4984657e'),
        name: 'Tablets',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846578'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Mobile Devices-Tablets'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f4984657f'),
        name: 'Smartwatches',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846578'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Mobile Devices-Smartwatches'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846580'),
        name: 'Fitness Bands',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846578'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Mobile Devices-Fitness Bands'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846581'),
        name: 'E-Readers',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846578'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Mobile Devices-E-Readers'
    },
    // Child categories for Computers
    {
        _id: new Types.ObjectId('665e99460e46df9f49846582'),
        name: 'Laptops',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846579'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Computers-Laptops'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846583'),
        name: 'Desktops',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846579'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Computers-Desktops'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846584'),
        name: 'Monitors',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846579'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Computers-Monitors'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846585'),
        name: 'Printers',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846579'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Computers-Printers'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846586'),
        name: 'Scanners',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846579'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Computers-Scanners'
    },
    // Child categories for Accessories
    {
        _id: new Types.ObjectId('665e99460e46df9f49846587'),
        name: 'Headphones',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846580'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Accessories-Headphones'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846588'),
        name: 'Chargers',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846580'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Accessories-Chargers'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846589'),
        name: 'Cables',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846580'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Accessories-Cables'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846590'),
        name: 'Power Banks',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846580'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Accessories-Power Banks'
    },
    {
        _id: new Types.ObjectId('665e99460e46df9f49846591'),
        name: 'Cases',
        parent_category: new Types.ObjectId('665e98f70e46df9f49846580'),
        sub_categories: [],
        child_categories: [],
        __v: 0,
        category_id: 'Electronics-Accessories-Cases'
    }
];


export const specifications = [
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846591"),
    "specification_name": "Screen Size",
    "is_range": true,
    "range": {
      "low": 11,
      "high": 17
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Laptops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846592"),
    "specification_name": "RAM",
    "is_range": true,
    "range": {
      "low": 4,
      "high": 32
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Laptops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846593"),
    "specification_name": "Storage Type",
    "is_range": false,
    "range": {},
    "list_of_values": ["SSD", "HDD", "SSD Hybrid"],
    "category_id": "Electronics-Computers-Laptops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846594"),
    "specification_name": "Processor",
    "is_range": false,
    "range": {},
    "list_of_values": ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
    "category_id": "Electronics-Computers-Laptops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846595"),
    "specification_name": "Operating System",
    "is_range": false,
    "range": {},
    "list_of_values": ["Windows 10", "Windows 11", "macOS", "Linux"],
    "category_id": "Electronics-Computers-Laptops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846596"),
    "specification_name": "Processor",
    "is_range": false,
    "range": {},
    "list_of_values": ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
    "category_id": "Electronics-Computers-Desktops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846597"),
    "specification_name": "RAM",
    "is_range": true,
    "range": {
      "low": 4,
      "high": 128
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Desktops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846598"),
    "specification_name": "Storage Type",
    "is_range": false,
    "range": {},
    "list_of_values": ["SSD", "HDD", "SSD Hybrid"],
    "category_id": "Electronics-Computers-Desktops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f49846599"),
    "specification_name": "Graphics Card",
    "is_range": false,
    "range": {},
    "list_of_values": ["NVIDIA GeForce RTX 3060", "NVIDIA GeForce RTX 3070", "AMD Radeon RX 6700 XT"],
    "category_id": "Electronics-Computers-Desktops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659a"),
    "specification_name": "Operating System",
    "is_range": false,
    "range": {},
    "list_of_values": ["Windows 10", "Windows 11", "Linux"],
    "category_id": "Electronics-Computers-Desktops"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659b"),
    "specification_name": "Screen Size",
    "is_range": true,
    "range": {
      "low": 22,
      "high": 40
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Monitors"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659c"),
    "specification_name": "Resolution",
    "is_range": false,
    "range": {},
          "list_of_values": ["HD", "Full HD", "4K", "5K"],
    "category_id": "Electronics-Computers-Monitors"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659d"),
    "specification_name": "Refresh Rate",
    "is_range": true,
    "range": {
      "low": 60,
      "high": 240
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Monitors"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659e"),
    "specification_name": "Panel Type",
    "is_range": false,
    "range": {},
    "list_of_values": ["IPS", "VA", "TN", "OLED"],
    "category_id": "Electronics-Computers-Monitors"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f4984659f"),
    "specification_name": "Connectivity",
    "is_range": false,
    "range": {},
    "list_of_values": ["HDMI", "DisplayPort", "USB-C", "VGA"],
    "category_id": "Electronics-Computers-Monitors"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f498465a0"),
    "specification_name": "Print Type",
    "is_range": false,
    "range": {},
    "list_of_values": ["Inkjet", "Laser", "3D"],
    "category_id": "Electronics-Computers-Printers"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f498465a1"),
    "specification_name": "Print Resolution",
    "is_range": true,
    "range": {
      "low": 300,
      "high": 4800
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Printers"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f498465a2"),
    "specification_name": "Paper Capacity",
    "is_range": true,
    "range": {
      "low": 50,
      "high": 500
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Printers"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f498465a3"),
    "specification_name": "Connectivity",
    "is_range": false,
    "range": {},
    "list_of_values": ["USB", "Wireless", "Ethernet"],
    "category_id": "Electronics-Computers-Printers"
  },
  {
    "_id": new Types.ObjectId("665e99460e46df9f498465a4"),
    "specification_name": "Print Speed",
    "is_range": true,
    "range": {
      "low": 5,
      "high": 50
    },
    "list_of_values": [],
    "category_id": "Electronics-Computers-Printers"
  }
]

export const products = [
{
  "_id": new mongoose.Types.ObjectId(),
  "supplier_id":  new mongoose.Types.ObjectId("665eadfc69bac0d32279aac8"),
  "name": "Lenovo ThinkPad X1 Carbon Gen 9",
  "descriptive_name": "14 inch Ultrabook",
  "brand": "Lenovo",
  "UPIN": "LPX1C9",
  "price": 1499.99,
  "available_offers": "10% off on select credit cards",
  "detailed_description": "14 inch WQHD display, Intel Core i7-1165G7, 16GB RAM, 512GB SSD",
  "ratings": 4.7,
  "manufacturer": "Lenovo",
  "quantity": 25,
  "category_id": "Electronics-Computers-Laptops",
  "specifications": [
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846591"),
      "value": "14"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846592"),
      "value": "16"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846593"),
      "value": "SSD"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846594"),
      "value": "Intel i7-1165G7"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846595"),
      "value": "Windows 10 Pro"
    }
  ]
},
{
  "_id": new mongoose.Types.ObjectId(),
  "supplier_id":  new mongoose.Types.ObjectId("665eadfc69bac0d32279aac8"),
  "name": "Dell XPS 15",
  "descriptive_name": "15.6 inch Laptop",
  "brand": "Dell",
  "UPIN": "DXPS15",
  "price": 1799.99,
  "available_offers": "Free shipping",
  "detailed_description": "15.6 inch 4K UHD+ display, Intel Core i7-11800H, 32GB RAM, 1TB SSD",
  "ratings": 4.8,
  "manufacturer": "Dell",
  "quantity": 15,
  "category_id": "Electronics-Computers-Laptops",
  "specifications": [
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846591"),
      "value": "15.6"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846592"),
      "value": "32"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846593"),
      "value": "SSD"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846594"),
      "value": "Intel i7-11800H"
    }
  ]
},
{
  "_id": new mongoose.Types.ObjectId(),
  "supplier_id":  new mongoose.Types.ObjectId("665eadfc69bac0d32279aac8"),
  "name": "Asus ZenBook 14",
  "descriptive_name": "14 inch Ultrabook",
  "brand": "Asus",
  "UPIN": "AZB14",
  "price": 699.99,
  "available_offers": "Free shipping",
  "detailed_description": "14 inch Full HD display, Intel Core i5-1135G7, 8GB RAM, 256GB SSD",
  "ratings": 4.4,
  "manufacturer": "Asus",
  "quantity": 20,
  "category_id": "Electronics-Computers-Laptops",
  "specifications": [
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846591"),
      "value": "14"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846592"),
      "value": "8"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846593"),
      "value": "SSD"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846594"),
      "value": "Intel i5-1135G7"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846595"),
      "value": "Windows 10 Home"
    }
  ]
},
{
  "_id": new mongoose.Types.ObjectId(),
  "supplier_id":  new mongoose.Types.ObjectId("665eadfc69bac0d32279aac8"),
  "name": "Microsoft Surface Laptop 3",
  "descriptive_name": "13.5 inch Laptop",
  "brand": "Microsoft",
  "UPIN": "MSL3",
  "price": 999.99,
  "available_offers": "Free shipping",
  "detailed_description": "13.5 inch PixelSense touchscreen display, Intel Core i5-1035G7, 8GB RAM, 256GB SSD",
  "ratings": 4.6,
  "manufacturer": "Microsoft",
  "quantity": 15,
  "category_id": "Electronics-Computers-Laptops",
  "specifications": [
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846591"),
      "value": "13.5"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846592"),
      "value": "8"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846593"),
      "value": "SSD"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846594"),
      "value": "Intel i5-1035G7"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846595"),
      "value": "Windows 10 Home"
    }
  ]
},

{
  "_id": new mongoose.Types.ObjectId(),
  "supplier_id":  new mongoose.Types.ObjectId("665eadfc69bac0d32279aac8"),
  "name": "Acer Aspire 5",
  "descriptive_name": "15.6 inch Laptop",
  "brand": "Acer",
  "UPIN": "AA5",
  "price": 499.99,
  "available_offers": "Free shipping",
  "detailed_description": "15.6 inch Full HD display, Intel Core i3-1115G4, 6GB RAM, 256GB SSD",
  "ratings": 4.2,
  "manufacturer": "Acer",
  "quantity": 25,
  "category_id": "Electronics-Computers-Laptops",
  "specifications": [
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846591"),
      "value": "15.6"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846592"),
      "value": "6"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846593"),
      "value": "SSD"
    },
    {
      "specification_id": new mongoose.Types.ObjectId("665e99460e46df9f49846594"),
      "value": "Intel i3-1115G4"
    }
  ]
}
]