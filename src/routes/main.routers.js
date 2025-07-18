import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: "API Rest en Node.js" })
})

export default router;