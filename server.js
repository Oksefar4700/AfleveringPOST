const express = require('express');
const app = express();
const port = 8080; // Ændret porten til 8080
const { User } = require('./models');

app.use(express.static('public'));

// Definer en rute til at håndtere forespørgsler til hjemmesiden
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Send index.html som svar
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error getting users: ' , error);
        res.status(500).send('An error occorred');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
