const router = require('express').Router();
const productController =  require('../controllers/products');

router.post('/', productController.add);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;