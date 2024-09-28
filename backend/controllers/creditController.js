import Client from '../models/client.js';
import Request from '../models/request.js'; 

const submitRequest = async (req, res) => {
    try {
        const { name, lastname, email, rfc, income, amount, term } = req.body;

        const client = await fetch.findOne({ rfc });
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

        // Create a new request
        const newRequest = new Request({ 
            clientId,
            amount,
            term,
            status,
            reason,
        });

        await newRequest.save();

        const backendResponse = await fetch('http://simulador-de-credito-env.eba-trnbifgm.us-east-2.elasticbeanstalk.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ clientId, amount, term, status, reason }),
        });

        if (!backendResponse.ok) {
            const backendError = await backendResponse.json();
            console.error('Backend error:', backendError);
            return res.status(backendResponse.status).json({ message: 'Error contacting backend' });
        }

        return res.status(201).json({ status, message: reason || 'Solicitud aprobada', request: newRequest });
    } catch (error) {
        console.error('Error submitting request:', error);
        return res.status(500).json({ message: 'Error processing request' });
    }
};


export default {submitRequest};
