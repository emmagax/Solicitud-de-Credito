import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './CreditRequestForm.css'

const CreditRequestForm = ({ onResult }) => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [rfc, setRfc] = useState('');
    const [income, setIncome] = useState('');
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            name,
            lastname,
            email,
            rfc,
            income: parseFloat(income),
            amount: parseFloat(amount),
            term: parseInt(term),
        };

        try {
            const response = await fetch('http://localhost:5000/api/submit-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            onResult(result);
        } catch (error) {
            console.error('Error submitting request:', error);
            onResult({ status: 'Rechazado', message: 'Error al procesar la solicitud.' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>RFC:</label>
                <input type="text" value={rfc} onChange={(e) => setRfc(e.target.value)} required />
            </div>
            <div>
                <label>Ingreso:</label>
                <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} required />
            </div>
            <div>
                <label>Monto:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div>
                <label>Plazo:</label>
                <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />
            </div>
            <button type="submit">Submit Request</button>
        </form>
    );
};

export default CreditRequestForm;
