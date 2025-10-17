# MongoMovies 🎬

A full-stack movie browsing application built with Node.js, Express, and MongoDB.

## Description

MongoMovies is a web application that allows users to browse and search for movies. The frontend is a clean, modern interface built with HTML, Tailwind CSS, and vanilla JavaScript. The backend is a REST API powered by Node.js and Express, which connects to a MongoDB Atlas database to serve movie data.

## Features ✨

- **Dynamic Movie Grid:** Fetches and displays a list of movies from the database on page load.
- **Live Search:** Instantly search for movies by title, actors, or genres.
- **Responsive Design:** Looks great on both desktop and mobile devices.
- **Full-Stack Architecture:** Demonstrates a clean separation between the frontend client and the backend server.

## Tech Stack 🛠️

- **Frontend:** HTML, Tailwind CSS, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Dependencies:** `cors`, `dotenv`, `mongodb`

## How to Run Locally

1.  **Clone the repository.**
2.  **Backend Setup:**
    - `cd backend`
    - Create a `.env` file and add your `MONGO_URI` connection string.
    - Run `npm install`.
    - Run `node server.js`.
3.  **Frontend Setup:**
    - Open the `frontend` folder in VS Code.
    - Use the Live Server extension to open `index.html`.
