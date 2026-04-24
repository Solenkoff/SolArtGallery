import { Router, Request, Response, NextFunction } from 'express';

import UserServices from '../services/userServices.js';
import { authenticate } from '../middlewares/authenticate.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { HttpError } from '../utils/errorParser.js';
import sanitizeUser from '../utils/sanitizeUser.js';
import { usersPath } from '../constants/routeConstants.js';

const userController = Router();

// *  Register
userController.post(
  usersPath.register,
  async (req: Request, res: Response, next: NextFunction) => {
    const userInput: unknown = req.body;
    try {
      const responseData = await UserServices.register(userInput);
      res.status(200).json(responseData);
    } catch (error) {
      next(error);
    }
  }
);

// *  Login 
userController.post(
  usersPath.login,
  async (req: Request, res: Response, next: NextFunction) => {
    const userInput: unknown = req.body;
    try {
      const responseData = await UserServices.login(userInput);
      res.status(200).json(responseData);
    } catch (error) {
      next(error);
    }
  }
);

// *  Logout 
userController.get(
  usersPath.logout,
  authenticate,
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    try {
      await UserServices.logout(user._id);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      next(error);
    }
  }
);

// *  Me  ->   Current logged-in user
userController.get(
  usersPath.me,
  authenticate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user!;
      const sanitizedUser = sanitizeUser(user);
      res.status(200).json(sanitizedUser);
    } catch (error) {
      next(error);
    }
  }
);

// *  Get All  users/artists
userController.get(
  usersPath.getAll,
  authenticate,
  isAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = (await UserServices.getAll()).map(sanitizeUser);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

// *  Edit Role   ->  artist/admin
userController.put(
  usersPath.changeRole,
  authenticate,
  isAdmin,
  async (req, res, next) => {
    const userInput: unknown = req.body;
    const userId = req.params['userId'];
    if (
      !(
        typeof userInput == 'object' &&
        userInput !== null &&
        'role' in userInput &&
        (userInput.role === 'admin' || userInput.role === 'artist')
      )
    ) {
      throw new HttpError(400, 'Role must be "admin" or "artist"!');
    }
    try {
      const updatedUser = await UserServices.changeRole(userId, userInput.role);
      if (updatedUser === null) {
        throw new HttpError(400, 'User with this ID does not exist!');
      }
      const sanitizedUser = sanitizeUser(updatedUser);
      res.status(200).json(sanitizedUser);
    } catch (error) {
      next(error);
    }
  }
);

// *  Delete User/Artist
userController.get(
  usersPath.deleteUser,
  authenticate,
  isAdmin,
  async (req, res, next) => {
    const userId = req.params['userId'];

    try {
      const user = await UserServices.deleteUserById(userId);
      if (user === null) {
        throw new HttpError(400, 'User with this ID does not exist!');
      }
      const sanitizedUser = sanitizeUser(user);
      res.status(200).json(sanitizedUser);
    } catch (error) {
      next(error);
    }
  }
);

export default userController;
