import Medium from '../models/Medium.js';
import { CreateMediumSchema } from '../utils/validators/validateCreateMedium.js';
import { EditMediumSchema } from '../utils/validators/validateEditMedium.js';
import { BaseService } from './baseService.js';

export default new BaseService(Medium, CreateMediumSchema, EditMediumSchema);