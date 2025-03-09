const express = require('express');
const path = require('path');
// const http = require('http');
// const { Server } = require('socket.io');

const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);
//     socket.on('disconnect', () => {
//         console.log('A user disconnected:', socket.id);
//     });
// });

// setInterval(() => {
//     io.emit();
// }, 25);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const PORT = 4545;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});