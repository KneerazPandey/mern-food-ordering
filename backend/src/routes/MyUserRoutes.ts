import express from 'express';
import MyUserController from '../controllers/MyUserController';


const myUserRoute = express.Router();

myUserRoute.post('/', MyUserController.createCurrentUser);


export default myUserRoute;