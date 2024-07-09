import Router from 'express';
import CategoryControllers from '../Controllers/category_controllers.js'

const CategoryRouter = new Router();

CategoryRouter.post('/comment', CategoryControllers.createCategorys); //C
CategoryRouter.get('comments', CategoryControllers.getCategorys); //R
CategoryRouter.get('/comment/:id', CategoryControllers.getCategory); //R
CategoryRouter.put('/post/:id', CategoryControllers.updateCategory); //U
CategoryRouter.delete('/comment/:id', CategoryControllers.deleteCategory); //D  

export default CategoryRouter;