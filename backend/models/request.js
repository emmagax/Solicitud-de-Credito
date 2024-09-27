import { execute } from '../database/db';

class Request {
    constructor(clientId, amount, term, status, reason) {
        this.clientId = clientId;
        this.amount = amount;
        this.term = term;
        this.status = status;
        this.reason = reason;
    }

    static async create(clientId, amount, term, status, reason) {
        const query = 'INSERT INTO Solicitudes (ClienteID, Monto, Plazo, Estado, Motivo) VALUES (?, ?, ?, ?, ?)';
        const [result] = await execute(query, [clientId, amount, term, status, reason]);
        return result.insertId;
    }

    static async findByClientId(clientId) {
        const query = 'SELECT * FROM Solicitudes WHERE ClienteID = ?';
        const [rows] = await execute(query, [clientId]);
        return rows;
    }

}

export default Request;
