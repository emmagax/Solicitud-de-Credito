import { create } from '../models/client';
import { create as _create } from '../models/request';
import db from '../database/db'; 

export async function submitRequest(req, res) {
    try {
        const { name, lastname, email, rfc, income, amount, term } = req.body;

        const clientId = await create(name, lastname, email, rfc, income);

        const status = amount <= income * 5 ? 'Aprobado' : 'Rechazado';
        const reason = status === 'Rechazado' ? 'Monto solicitado excede el límite.' : null;

        await _create(clientId, amount, term, status, reason);

        return res.json({ status, message: reason || 'Solicitud aprobada' });
    } catch (error) {
        console.error('Error submitting request:', error);
        return res.status(500).json({ message: 'Error processing request' });
    }
}
