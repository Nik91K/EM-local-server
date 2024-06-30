import Router from 'express';
const ProductReviewRouter = new Router();

ProductReviewRouter.post('/comment'); //C
ProductReviewRouter.get('comments', (req, res) => {
  res.send('Повернулись всі')
  }); //R
ProductReviewRouter.get('/comment/:id', (req, res) => {
  res.send('Повернувся комент з id: ' + req.params.id)
  }); //R
//router.put(''); //U
ProductReviewRouter.delete('/comment/:id', (req, res) => {
  res.send('Видалили комент з id: ' + req.params.id)
  }); //D  

export default ProductReviewRouter;