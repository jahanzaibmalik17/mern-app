const router = require('express').Router();
const productController =  require('../controllers/products');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, productController.add);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;