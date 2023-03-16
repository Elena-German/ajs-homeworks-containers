import ErrorRepository from '../ErrorRepository';

test('testing class ErrorRepository method translate(code) - the repository contains the code', () => {
  const myErrorRepository = new ErrorRepository();
  expect(myErrorRepository.translate('456')).toBe('ошибка 456');
});

test('testing class ErrorRepository method translate(code) - the repository does not contain the code', () => {
  const myErrorRepository = new ErrorRepository();
  expect(myErrorRepository.translate('45')).toBe('Unknown error');
});
