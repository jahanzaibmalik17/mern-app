const Product = require("../models/Product");

module.exports.add = async (req, res) => {
  try {
    console.log('req.body', JSON.stringify(req.body))
    const product = new Product({
      name: req.body.product.name,
      user: req.user._id,
      make: req.body.product.make,
      imagesArray: req.body.product.imagesArray,
      model: req.body.product.model,
      year: req.body.product.year,
      vin: req.body.product.vin,
      shipping_status: req.body.product.vin
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.log("controller:products:add", error);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const pageSize = 8;
    const page = Number(req.query.pageNumber) || 1;

    // Build the query for filtering
    let query = {};

    if (req.query.make) {
      query.make = { $regex: req.query.make, $options: 'i' };  // Case insensitive search
    }
    if (req.query.model) {
      query.model = { $regex: req.query.model, $options: 'i' };  // Case insensitive search
    }
    if (req.query.year) {
      query.year = req.query.year;  // Exact match for year
    }

    console.log('query', query);

    // Get the count of products based on the query
    const count = await Product.countDocuments(query);

    // Fetch the products based on the query
    const products = await Product.find(query)
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  } catch (error) {
    console.log("controller:products:getAll", error);
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports.getOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log("controller:products:getOne", error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const { name, make, model, imagesArray, year, vin, keyword, shipping_status } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name;
      product.make = make;
      product.model = model;
      product.imagesArray = imagesArray;
      product.year = year;
      product.vin = vin;
      product.keyword = keyword;
      product.shipping_status = shipping_status;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    }
  } catch (error) {
    console.log("controller:products:update", error);
  }
};

module.exports.delete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.log("controller:products:delete", error);
  }
};

module.exports.toggleStatus = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isActive = !product.isActive;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    }
  } catch (error) {
    console.log("controller:products:toggleStatus", error);
  }
};