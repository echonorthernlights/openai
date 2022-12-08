const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

const openaiRouter = require('./routes/openaiRoutes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', openaiRouter)
app.listen(PORT, () => {
    console.log('Server on port : 5000...')
})