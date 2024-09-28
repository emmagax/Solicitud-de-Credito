import React, { useState } from 'react';
import CreditRequestForm from './CreditRequestForm';
import ResultDisplay from './ResultsDisplay';

const App = () => {
    const [result, setResult] = useState(null);

    const handleResult = (result) => {
        setResult(result);
    };

    return (
        <div>
            <h1>Simulador de Solicitud de Crédito</h1>
            <CreditRequestForm onResult={handleResult} />
            {result && <ResultDisplay result={result} />}
        </div>

    );

};



export default App;