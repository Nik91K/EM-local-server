import Router from 'express';

const regRouter = new Router();

userRouter.user('/reg/registration', registration); //Reg
userRouter.user('/reg/login', login); //Login

export default regRouter;