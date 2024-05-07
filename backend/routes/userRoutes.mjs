import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controller/userController.mjs';

const userRoute = express.Router();
// phle /user followed by this 
userRoute.route('/').post(registerUser).get(getUsers);
userRoute.post('/login', authUser);
userRoute.route('/profile').get(getUserProfile).put(updateUserProfile);
userRoute.post('/logout', logoutUser);
userRoute.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default userRoute;