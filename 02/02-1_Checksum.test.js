const calculateChecksum = require('./02-1_Checksum');

it('shoud compute 18 for the example spreadsheet', () => {
  const spreadsheet =
    [
      [5, 1, 9, 5],
      [7, 5, 3],
      [2, 4, 6, 8]
    ]
  const result = calculateChecksum(spreadsheet);
  expect(result).toBe(18)
})