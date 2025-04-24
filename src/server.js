// server.js
const express = require('express');
const config = require('./config');

// Импортируем роутеры для всех сущностей:
const abiturientRouter = require('./abiturient.router');
const examRouter = require('./exam.router');
const teacherRouter = require('./teacher.router');

const app = express();

// Подключаем JSON‑middleware (парсер)
app.use(express.json());

// Регистрируем маршруты по сущностям:
app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

// Обработка несоответствующих запросов (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Запуск сервера на порту, указанном в config.js
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
