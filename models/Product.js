const mongoose  = require('mongoose');

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    imagesArray: {
      type: Array,
      required: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: false,
    },
    vin: {
      type: Number,
      required: true,
      default: 0,
    },
    shipping_status: {
      type: Boolean,
      default: true,
    },
    keyword: {
      type: String,
      required: false,
    },
    // isFavorite: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
