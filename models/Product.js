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
    housingType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    radius: {
      type: Number,
      required: true,
      default: 0,
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
    vacant: {
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
