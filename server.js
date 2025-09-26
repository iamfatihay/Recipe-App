const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// API proxy endpoint
app.get('/api/recipes', async (req, res) => {
    try {
        const { q, mealType } = req.query;
        const APP_ID = process.env.REACT_APP_APP_ID || 'a658d166';
        const APP_KEY = process.env.REACT_APP_APP_KEY || '873bde986100aef8b561fc76713c9a2f';
        
        const url = `https://api.edamam.com/search?q=${encodeURIComponent(q)}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
        
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('API Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
