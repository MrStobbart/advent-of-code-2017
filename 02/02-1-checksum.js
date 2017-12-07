
module.exports = calculateChecksum;

function calculateChecksum(spreadsheet) {
  
  return spreadsheet.reduce((sum, row, index) => {
    const max = Math.max(...row)
    const min = Math.min(...row)
    const rowChecksum = max - min
    return sum + rowChecksum
  }, 0)
}