import Router from 'express';

const CategoryRouter = new Router();

CategoryRouter.post('/comment'); //C
CategoryRouter.get('comments', (req, res) => {
  res.send('Повернулись всі')
  }); //R
  CategoryRouter.get('/comment/:id', (req, res) => {
  res.send('Повернулась категорія з id: ' + req.params.id)
  }); //R
//router.put(''); //U
CategoryRouter.delete('/comment/:id', (req, res) => {
  res.send('Видалили категорію з id: ' + req.params.id)
  }); //D  

export default CategoryRouter;