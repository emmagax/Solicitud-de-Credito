const express = require('express');
const bodyParser = require('body-parser');
const creditRoutes = require('./routes/creditRoutes').default;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', creditRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
