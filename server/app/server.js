const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const quizRouter = require('../routes/quiz.router');
const userRouter = require('../routes/user.router');

const mongooseUrl = 'mongodb+srv://Riddhiman_Mongo:Hello123@cluster1.b76yf.mongodb.net/MyGov?retryWrites=true&w=majority';
mongoose.connect(mongooseUrl);
console.log('Connected to db');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/quiz', quizRouter);
app.use(express.static('/public'))
app.use('/build/',express.static('../../node_modules/three/build'));
app.use('/jsm/',express.static('../../node_modules/three/examples/jsm'));
app.use('/domevents/',express.static('../../node_modules/threex.domevents'));
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
