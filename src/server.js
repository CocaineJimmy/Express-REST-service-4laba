// server.js
const express = require('express');
const config = require('./config');
const userRouter = require('./resources/users/user.router');

const app = express();

app.use(express.json());

// Регистрируем маршруты для ресурса users
app.use('/users', userRouter);

// Обработка несуществующих маршрутов
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
