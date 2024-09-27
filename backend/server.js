import express, { json } from 'express';
import connectDB from './database/db.js';
import cors from 'cors';
import creditController from './controllers/creditController.js'

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/clients', creditController.submitRequest)


app.post('/api/submit-request', creditController.submitRequest);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
