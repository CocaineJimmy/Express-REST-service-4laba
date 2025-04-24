// teacher.model.js
class Teacher {
    constructor({ id, name, subject }) {
      this.id = id;
      this.name = name;
      this.subject = subject;
    }
  
    static toResponse(teacher) {
      const { id, name, subject } = teacher;
      return { id, name, subject };
    }
  }
  
  module.exports = Teacher;
  