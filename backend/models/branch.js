import { Schema, model } from 'mongoose';

const branchSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
});

export default model('Branch', branchSchema);
