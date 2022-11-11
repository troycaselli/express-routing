const express = require('express');
const racesRoutes = require('./races/racesRoutes');
const villainsRoutes = require('./villains/villainsRoutes');

const server = express();
const port = 9000;

server.use('/races', racesRoutes);
server.use('/villains', villainsRoutes);
server.use('/', (req, res) => {
    res.status(200).send('Hello from express');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});