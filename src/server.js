// server.js
const express = require('express');
const config = require('./config');
const userRouter = require('./user.router');

const app = express();

// JSON‑парсер для входящих запросов
app.use(express.json());

// Регистрируем маршруты для ресурса пользователей
app.use('/users', userRouter);

// Обработка запросов к несуществующим эндпоинтам
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Запуск сервера на порту, указанном в config.js
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
