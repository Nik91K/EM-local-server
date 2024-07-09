import Router from 'express';
import ReviewControllers from '../Controllers/review_controllers.js'

const RewiewRouter = new Router();

RewiewRouter.post('/comment', ReviewControllers.createReviews); //C
RewiewRouter.get('comments', ReviewControllers.getReviews); //R
RewiewRouter.get('/comment/:id', ReviewControllers.getReview); //R
RewiewRouter.put('/post/:id', ReviewControllers.updateReview);  //U
RewiewRouter.delete('/comment/:id', ReviewControllers.deleteReview); //D  

export default ProductReviewRouter;