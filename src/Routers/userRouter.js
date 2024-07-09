import Router from 'express';
import UserControllers from '../Controllers/user_controllers.js'

const UserRouter = new Router();

UserRouter.post('/comment', UserControllers.createUsers); //C
UserRouter.get('comments', UserControllers.getUsers); //R
UserRouter.get('/comment/:id', UserControllers.getUser); //R
UserRouter.put('/post/:id', UserControllers.updateUser); //U
UserRouter.delete('/comment/:id', UserControllers.deleteUser); //D

export default UserRouter;