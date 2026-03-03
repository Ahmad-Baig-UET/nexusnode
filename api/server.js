const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/ingest', require('./routes/ingest'));
app.use('/marketplace', require('./routes/marketplace'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
