import Router from 'express';
import ProductControllers from '../Controllers/product_controllers.js'

const ProductRouter = new Router();

ProductRouter.post('/comment', ProductControllers.createProduct); //C
ProductRouter.get('comments', ProductControllers.getProducts); //R
ProductRouter.get('/comment/:id', ProductControllers.getProduct); //R
ProductRouter.put('/post/:id', ProductControllers.updateProduct); //U
ProductRouter.delete('/comment/:id', ProductControllers.deleteProduct); //D  

export default ProductRouter;