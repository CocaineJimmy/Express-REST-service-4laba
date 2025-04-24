// exam.model.js
class Exam {
    constructor({ id, subject, abiturientId, teacherId }) {
      this.id = id;
      this.subject = subject;
      this.abiturientId = abiturientId || null;
      this.teacherId = teacherId || null;
    }
  
    static toResponse(exam) {
      const { id, subject, abiturientId, teacherId } = exam;
      return { id, subject, abiturientId, teacherId };
    }
  }
  
  module.exports = Exam;
  