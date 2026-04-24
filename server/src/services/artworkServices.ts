import Artwork from '../models/Artwork.js';
import { CreateArtworkSchema } from '../utils/validators/validateCreateArtwork.js';
import { EditArtworkSchema } from '../utils/validators/validateEditArtwork.js';
import { BaseService } from './baseService.js';

export default new BaseService(Artwork, CreateArtworkSchema, EditArtworkSchema);