// server.js
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Get the MongoDB connection string from the .env file
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("✅ Backend connected to MongoDB Atlas!");
        const database = client.db('mongoMoviesDb');
        const moviesCollection = database.collection('movies');

        // This is the API endpoint the frontend will call
        app.get('/api/movies', async (req, res) => {
            const query = req.query.search;
            let movies;
            if (query) {
                const searchRegex = new RegExp(query, 'i'); // Case-insensitive search
                movies = await moviesCollection.find({
                    $or: [
                        { title: { $regex: searchRegex } },

                        { "starCast": { $regex: searchRegex } }
                    ]
                }).sort({ imdbRating: -1 }).toArray();
            } else {
                movies = await moviesCollection.find({}).sort({ imdbRating: -1 }).toArray();
            }
            res.json(movies);
        });

        app.listen(port, () => {
            console.log(`🚀 Backend server running on http://localhost:${port}`);
        });

    } catch (err) {
        console.error("❌ Backend failed to connect to MongoDB", err);
        process.exit(1);
    }
}

run();