import { v4 as uuidv4 } from 'uuid';

// abiturient.model.js
class Abiturient {
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Метод формирования ответа – исключается лишняя служебная информация
  static toResponse(abiturient) {
    const { id, name, email } = abiturient;
    return { id, name, email };
  }
}

module.exports = Abiturient;


export default User;
