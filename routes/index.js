const router = require('express').Router();
const userRoutes = require('./user');
const productRoutes = require('./product');
const uploadRoutes = require('./upload');
const { protect } = require('../middlewares/authMiddleware');

router.use('/api/user', userRoutes);
router.use('/api/upload', uploadRoutes);
router.use('/api/product', productRoutes);


module.exports = router;