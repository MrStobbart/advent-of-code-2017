const inverseCaptcha = require('./01-1-inverse-captcha');

it('should compute 3 for 1122', () => {
  const result = inverseCaptcha('1122');
  expect(result).toBe(3)
})

it('should compute 4 for 1111', () => {
  const result = inverseCaptcha('1111');
  expect(result).toBe(4)
})

it('should compute 0 for 1234', () => {
  const result = inverseCaptcha('1234');
  expect(result).toBe(0)
})

it('shoud compute 9 for 91212129', () => {
  const result = inverseCaptcha('91212129');
  expect(result).toBe(9)
})