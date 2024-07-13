import Router from 'express';

const authRouter = new Router();

postRouter.post('/auth/registration', registration); //Reg
postRouter.post('/posts/login', login); //Login

export default authRouter;