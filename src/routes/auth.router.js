import { Router } from 'express'
import { main } from '../controllers/main.controller.js';

const router = Router();

router.post('/login', (req, res) => {
    res.json({ message: 'ok'})
});

export default router;