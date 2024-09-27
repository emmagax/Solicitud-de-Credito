import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    rfc: { type: String, required: true },
    income: { type: Number, required: true }
});

const Client = mongoose.model('Client', clientSchema)

export default Client;
