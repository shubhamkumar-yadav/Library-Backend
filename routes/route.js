import express from 'express';
import { getUser} from '../controller/comment-controller.js';
const route = express.Router();
route.post('/formData',getUser);

export {route};