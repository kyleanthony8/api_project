//IMPORT
import { Router } from 'express';
import charactersRoutes from './characters.js';

const router = Router()

//ROUTES
router.get('/', (req, res) => res.send('This is the API root!'));

router.use('/characters', charactersRoutes);

export default router;  