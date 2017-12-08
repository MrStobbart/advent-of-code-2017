const spiralMemory = require('./03-1-spiral-memory').spiralMemory;
const findLevel = require('./03-1-spiral-memory').findLevel;


it('should calculate 0 steps for 1', () => {
  const steps = spiralMemory(1);
  expect(steps).toBe(0)
})

it('should calculate 3 steps for 12', () => {
  const steps = spiralMemory(12);
  expect(steps).toBe(3)
})

it('should calculate 2 steps for 23', () => {
  const steps = spiralMemory(23);
  expect(steps).toBe(2)
})

it('should calculate 31 steps for 1024', () => {
  const steps = spiralMemory(1024);
  expect(steps).toBe(31)
})

it('should find level 3 for 49', () => {
  const level = findLevel(49);
  expect(level.i).toBe(3)
})

it('should find level 1 for 2', () => {
  const level = findLevel(2);
  expect(level.i).toBe(1)
})

it('should find level 0 for 1', () => {
  const level = findLevel(1);
  expect(level.i).toBe(0)
})