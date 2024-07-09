import { Router } from "express";
import AuthController from '../Controllers/Auth_controllers.js';
import { check } from "express-validator";
import { empty } from "uuidv4";

const authRouter = new Router();

authRouter.post(
  '/auth/registration',
  [
    check('email', 'Email empty!').isString().isEmail().notEmpty(),
    check('password').notEmpty().matches(/(?=.[0-9])(?=.[!@#$%^&])(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z!@#$%^&]{6,}/g).length({min: 8, max: 16})
  ],
  AuthController.registration);
authRouter.post('/auth/login', AuthController.login);

export default authRouter
