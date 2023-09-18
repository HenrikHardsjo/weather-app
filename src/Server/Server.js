const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Add CORS middleware to allow requests from your React app
app.use(cors());

app.get('/getWeather/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=a68cd35bad144edda19132135231304&q=${city}&days=6&aqi=no&alerts=no`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
