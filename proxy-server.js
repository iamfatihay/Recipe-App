const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

// CORS middleware
app.use(cors());
app.use(express.json());

// Recipe API proxy endpoint
app.get('/api/recipes', async (req, res) => {
    try {
        const { q, mealType } = req.query;
        const APP_ID = process.env.REACT_APP_APP_ID || 'a658d166';
        const APP_KEY = process.env.REACT_APP_APP_KEY || '873bde986100aef8b561fc76713c9a2f';
        
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(q)}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
        
        console.log('Fetching from:', url);
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
