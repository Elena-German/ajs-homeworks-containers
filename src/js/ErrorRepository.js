export default class ErrorRepository {
  constructor() {
    this.listErrors = new Map();
    this.listErrors.set('123', 'ошибка 123');
    this.listErrors.set('456', 'ошибка 456');
  }

  translate(code) {
    if (this.listErrors.has(code)) {
      return this.listErrors.get(code);
    } return 'Unknown error';
  }
}
