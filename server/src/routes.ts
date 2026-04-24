import { Router } from 'express';

import {
  usersPath,
  artworksPath,
  stylesPath,
  mediumsPath,
} from './constants/routeConstants.js';

import userController from './controllers/userController.js';
import artworkController from './controllers/artworkController.js';
import styleController from './controllers/styleController.js';
import mediumController from './controllers/mediumController.js';

const router = Router();

router.use(usersPath.root, userController);
router.use(artworksPath.root, artworkController);
router.use(stylesPath.root, styleController);
router.use(mediumsPath.root, mediumController);

export default router;