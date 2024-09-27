import { execute } from '../database/db';

class Branch {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    static async create(name, address) {
        const query = 'INSERT INTO Sucursales (Nombre, Direccion) VALUES (?, ?)';
        const [result] = await execute(query, [name, address]);
        return result.insertId;
    }

    static async getAll() {
        const query = 'SELECT * FROM Sucursales';
        const [rows] = await execute(query);
        return rows;
    }

}

export default Branch;
