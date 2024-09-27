import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    amount: { type: Number, required: true },
    term: { type: Number, required: true },
    status: { type: String, enum: ['Aprobado', 'Rechazado'], required: true },
    reason: { type: String, default: null }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema)

export default Request;
