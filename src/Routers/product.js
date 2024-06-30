import Router from 'express';

const ProductRouter = new Router();

ProductRouter.post('/comment'); //C
ProductRouter.get('comments', (req, res) => {
  res.send('Повернулись всі')
  }); //R
  ProductRouter.get('/comment/:id', (req, res) => {
  res.send('Повернувся продукт з id: ' + req.params.id)
  }); //R
//router.put(''); //U
ProductRouter.delete('/comment/:id', (req, res) => {
  res.send('Видалили продукт з id: ' + req.params.id)
  }); //D  

export default ProductRouter;