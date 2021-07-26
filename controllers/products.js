const Product = require("../models/Product");

module.exports.add = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.product.name,
      user: req.user._id,
      housingType: req.body.product.housingType,
      imagesArray: req.body.product.imagesArray,
      description: req.body.product.description,
      // location: req.body.location,
      // radius: req.body.radius,
      // keyword: req.body.keyword,
      // phone: req.body.phone,
      // email: req.body.email,
      // website: req.body.website,
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
    const count = await Product.countDocuments({});
    const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
  } catch (error) {
    console.log("controller:products:getAll", error);
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
    const { name, housingType, description, imagesArray, location, radius, keyword } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name;
      product.housingType = housingType;
      product.description = description;
      product.imagesArray = imagesArray;
      product.location = location;
      product.radius = radius;
      product.keyword = keyword;
      // product.phone = phone;
      // product.email = email;
      // product.website = website;
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
