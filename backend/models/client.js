import { execute } from '../database/db'; 

class Client {
    constructor(name, lastname, email, rfc, income) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.rfc = rfc;
        this.income = income;
    }

    static async create(name, lastname, email, rfc, income) {
        const query = 'INSERT INTO Clientes (Nombre, DNI, Ingresos) VALUES (?, ?, ?)';
        const [result] = await execute(query, [name, lastname, email, rfc, income]);
        return result.insertId;
    }

    static async findById(id) {
        const query = 'SELECT * FROM Clientes WHERE ID = ?';
        const [rows] = await execute(query, [id]);
        return rows[0];
    }

}

export default Client;
