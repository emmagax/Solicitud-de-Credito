import { connect } from 'mongoose';

const uri = 'mongodb+srv://emmagaxiol:TjFS4cHP9ZiG4uzD@cluster0.jbx7y.mongodb.net/creditDB';

const connectDB = async () => {
    try {
        await connect(uri)
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;