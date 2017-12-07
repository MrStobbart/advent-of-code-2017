const calculateChecksum = require('./02-2-checksum');

it('shoud compute 18 for the example spreadsheet', () => {
  const spreadsheet =
    [
      [5, 9, 2, 8],
      [9, 4, 7, 3],
      [3, 8, 6, 5]
    ]
  const result = calculateChecksum(spreadsheet);
  expect(result).toBe(9)
})