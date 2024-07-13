import { Router } from "express";
import RegController from '../Controllers/Reg_controllers.js';
import { check } from "express-validator";
import { empty } from "uuidv4";

const regController = new Router();

regController.user(
  '/reg/registration',
  [
    check('email', 'Не валідний пароль!').isString().isEmail().notEmpty(),
    check('password').notEmpty().matches(/(?=.[0-9])(?=.[!@#$%^&])(?=.[a-z])(?=.[A-Z])[0-9a-zA-Z!@#$%^&]{6,}/g).length({min: 8, max: 16})
  ],
  RegController.registration);
  regController.user('/reg/login', RegController.login);

export default regController