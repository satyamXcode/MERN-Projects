const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve files from 'public' folder

// // Basic route
// app.get('/', (req, res) => {
//     res.send("Hello, world! & Bye bye");
// })

app.get('/api/data', (req, res) => {
  res.json({ message: 'API response!', status: 200 });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

