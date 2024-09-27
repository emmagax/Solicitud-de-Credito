import Client from '../models/client.js';
import Request from '../models/request.js'; 

const submitRequest = async (req, res) => {
    try {
        const { name, lastname, email, rfc, income, amount, term } = req.body;

        const client = await Client.findOne({ rfc });
        let clientId;

        if (!client) {
            const newClient = new Client({
                name,
                lastname,
                email,
                rfc,
                income,
            });
            await newClient.save();
            clientId = newClient._id; 
        } else {
            clientId = client._id;
        }

        const status = amount <= income * 5 ? 'Aprobado' : 'Rechazado';
        const reason = status === 'Rechazado' ? 'Monto solicitado excede el límite.' : null;

        const newRequest = new Request({ 
            clientId,
            amount,
            term,
            status,
            reason,
        });

        
        await newRequest.save();

        return res.status(201).json({ status, message: reason || 'Solicitud aprobada', request: newRequest });
    } catch (error) {
        console.error('Error submitting request:', error);
        return res.status(500).json({ message: 'Error processing request' });
    }
};

export default {submitRequest};
