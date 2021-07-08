import express, { Router } from 'express';
import Usercontroller from './controllers/Usercontroller';
import AuthController from './controllers/AuthController';
import auth from './middleware/auth';
const routes = new Router();

const userController = new Usercontroller();
const authController = new AuthController();

routes.post('/users', userController.create);
routes.get('/users', auth, userController.index);

routes.post('/login', authController.authenticate);

export default routes;