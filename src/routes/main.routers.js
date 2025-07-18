import { Router } from 'express'
import { main } from '../controllers/main.controller.js';

const router = Router();

router.get('/', main)

export default router;