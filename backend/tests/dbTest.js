import connectDB from '../database/db.js';
import Client from '../models/client.js';

const testConnection = async () => {
    await connectDB();

    const testClient = new Client({
        name: 'John',
        lastname: 'Doe',
        email: 'johndoe@test.com',
        rfc: '12345678',
        income: 50000,
    });

    await testClient.save();
    console.log('Client saved:', testClient);
};

testConnection();
