import { mediumsPath } from '../constants/routeConstants.js';
import MediumServices from '../services/mediumServices.js';
import { createCrudController } from './abstractCrudController.js';

export default createCrudController({
  paths: mediumsPath,
  paramName: 'mediumId',
  service: MediumServices,
});