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
    image: {
      type: String,
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
    // lat: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // lan: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // zip: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // isFavorite: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
