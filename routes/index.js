const router = require('express').Router();
const userRoutes = require('./user');
const productRoutes = require('./product');
const uploadRoutes = require('./product');
const upload = require('./upload')
const { protect } = require('../middlewares/authMiddleware');

router.use('/api/user', userRoutes);
router.use('/api/upload', upload);
router.use('/api/product', protect, productRoutes);


module.exports = router;