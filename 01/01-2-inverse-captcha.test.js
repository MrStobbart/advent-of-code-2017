const inverseCaptcha = require('./01-2_InverseCaptcha');

it('should compute 6 for 1212', () => {
  const result = inverseCaptcha('1212');
  expect(result).toBe(6)
})

it('should compute 0 for 1221', () => {
  const result = inverseCaptcha('1221');
  expect(result).toBe(0)
})

it('should compute 4 for 123425', () => {
  const result = inverseCaptcha('123425');
  expect(result).toBe(4)
})

it('shoud compute 12 for 123123', () => {
  const result = inverseCaptcha('123123');
  expect(result).toBe(12)
})

it('shoud compute 4 for 12131415', () => {
  const result = inverseCaptcha('12131415');
  expect(result).toBe(4)
})