import Product from '../Models/product.js'
import Category from '../Models/product_category.js'
import Review from '../Models/product_review.js'
import { validationResult } from 'express-validator'

class AuthController{
  async registration(req, res)
  {
    const errors = validationResult(req);

    if(!errors.isEmpty()){ throw new Error('Помилка валідації!');
    }

    const {name, email, password} = req.body;
    const user = await User.find({'email': email});

    if (user)
      { 
        throw new Error('Цей імейл вже зареєстрований!');
      }
      const passwordHash = bcryptjs.hashSync(password, 10);
      return res.status(201).json('Ви зареєстровані!');
    }
  async login(req, res)
  {
    try{
      const { email, password } = req.body;
      const user = await User.find
    }
    catch(e){
      res.status(500).json(e)
    }
  }
}