import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CreditRequestForm.css'
import axios from 'axios';

const CreditRequestForm = ({ onResult }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        rfc: '',
        income: '',
        amount: '',
        term: ''
    });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/credit-request', formData);
            onResult(response.data);
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nombre" onChange={handleChange} required />
            <input name="lastname" placeholder="Apellido" onChange={handleChange} required />
            <input name="email" placeholder="Correo Electronico" onChange={handleChange} required /><br />
            <input name="rfc" placeholder="RFC" onChange={handleChange} required />
            <input name="income" type="number" placeholder="Ingresos" onChange={handleChange} required />
            <input name="amount" type="number" placeholder="Monto" onChange={handleChange} required />
            <Form.Select aria-label="Default select example" name='term'>
                <option>Plazo</option>
                <option value="1">1 año</option>
                <option value="2">5 años</option>
                <option value="3">10 años</option>
            </Form.Select>
            <br />
            <button type="submit">Enviar Solicitud</button>
            {result && <div>{result.status}: {result.message}</div>}
        </form>

    );
};

export default CreditRequestForm;