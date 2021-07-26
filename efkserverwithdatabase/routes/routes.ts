const Router = require('express');
const router = new Router();
const controller = require('../controller/controller');

router.post('/category', controller.createCategory);
router.get('/category', controller.getCategories);
router.get('/category/:id', controller.getOneCategory);
router.put('/category', controller.updateCategory);
router.delete('/category/:id', controller.deleteCategory);



module.exports = router;
