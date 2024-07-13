import User from '../Models/user.js'
import Category from '../Models/product_category.js'
import Review from '../Models/product_review.js'
import { validationResult } from 'express-validator'
import bcrypt from 'bacryptjs'

class RegController{
  async registration(req, res)
  {
    const errors = registrationResult(req);

    if(!errors.isEmpty()){ throw new Error('Помилка реєстрації!');
    }

    const {name, email, password} = req.body;
    const user = await User.findOne({'email': email});

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

export default new RegController