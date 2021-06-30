const router = require('express').Router();
const userRoutes = require('./user');
const productRoutes = require('./product');
const uploadRoutes = require('./product');

router.use('/api/user', userRoutes);
router.use('/api/product', productRoutes);
router.use('/api/upload', uploadRoutes);

module.exports = router;