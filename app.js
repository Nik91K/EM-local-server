import express from 'express';
import mongoose from 'mongoose';

import ProductReviewRouter from './src/Routers/reviewRouter.js';
import CategoryRouter from './src/Routers/categoryRouter.js';
import ProductRouter from './src/Routers/product.js';

import 'dotenv/config';
const app = express()

mongoose.connect('') 
.then(() => console.log('Connected!'))
.catch(()=> console.log('Failed'));

app.use('/api', ProductReviewRouter);
app.use('/api', CategoryRouter);
app.use('/api', ProductRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('main')
})

app.get('/user', (req, res) => {
  res.send('/user')
})

app.delete('/user', (req, res) => {
  res.send(' delete /user')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});