import { artworksPath } from '../constants/routeConstants.js';
import ArtworkServices from '../services/artworkServices.js';
import { createCrudController } from './abstractCrudController.js';

export default createCrudController({
  paths: artworksPath,
  paramName: 'artworkId',
  service: ArtworkServices,
});