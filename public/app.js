const express = require('express');
const app = express();

const port = 3000;
const { User } = require('./models');

app.get('/', async (req, res) => {
    const users = await User.findAll();
    let table = '<table><tr><th>Name</th><th>Email</th></tr>';
    users.forEach(user => {
        table += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
    });
    table += '</table>';
    res.send(table);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
