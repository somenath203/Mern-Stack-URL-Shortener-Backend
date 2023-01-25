require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connectDB } = require('./db/connect');
const shortUrlRoutes = require('./routes/urlShortenerRoutes');

connectDB();


const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use(shortUrlRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});