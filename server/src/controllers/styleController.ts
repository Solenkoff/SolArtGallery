import { stylesPath } from '../constants/routeConstants.js';
import StyleServices from '../services/styleServices.js';
import { createCrudController } from './abstractCrudController.js';

export default createCrudController({
  paths: stylesPath,
  paramName: 'styleId',
  service: StyleServices,
});