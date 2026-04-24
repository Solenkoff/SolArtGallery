import Style from '../models/Style.js';
import { CreateStyleSchema } from '../utils/validators/validateCreateStyle.js';
import { EditStyleSchema } from '../utils/validators/validateEditStyle.js';
import { BaseService } from './baseService.js';

export default new BaseService(Style, CreateStyleSchema, EditStyleSchema);