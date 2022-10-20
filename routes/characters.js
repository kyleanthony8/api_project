//IMPORT
import { Router } from 'express';
import * as controllers from '../controllers/characters.js';

const router = Router();

//ROUTES
router.get('/', controllers.getCharacters);
router.get('/:id', controllers.getCharacters);
router.post('/', controllers.createCharacter);
router.put('/:id', controllers.updateCharacter);
router.delete('/:id', controllers.deleteCharacter);

export default router;