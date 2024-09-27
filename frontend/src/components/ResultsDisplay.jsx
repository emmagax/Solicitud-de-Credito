import React from 'react';

const ResultDisplay = ({ result }) => {
    return (
        <div>
            <h2>Resultado de la Solicitud</h2>
            <p>{result.status}</p>
            {result.reason && <p>Motivo: {result.reason}</p>}
        </div>
    );
};

export default ResultDisplay;