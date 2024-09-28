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
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellido:</Form.Label>
                        <Form.Control type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>RFC:</Form.Label>
                        <Form.Control type="text" value={rfc} onChange={(e) => setRfc(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Ingreso:</Form.Label>
                        <Form.Control type="number" value={income} onChange={(e) => setIncome(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Monto:</Form.Label>
                        <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Plazo (meses):</Form.Label>
                        <Form.Control type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Enviar Solicitud</Button>
        </Form>
    );
};

export default CreditRequestForm;
