import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors());

app.use(express.json());

import prouctsRouter from './src/routes/products.routers.js';
app.use(prouctsRouter);
import mainRouter from './src/routes/main.routers.js';
app.use(mainRouter);

app.use((req, res, next) => {
    res.status(404).json({error: 'Not Found'});
})

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))