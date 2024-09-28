import express, { json } from 'express';
import connectDB from './database/db.js';
import cors from 'cors';
import creditController from './controllers/creditController.js'

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.post('/clients', creditController.submitRequest)
app.post('/api/submit-request', creditController.submitRequest);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
