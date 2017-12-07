
module.exports = calculateChecksum;

function calculateChecksum(spreadsheet) {
  
  return spreadsheet.reduce((sum, row) => {

    const rowChecksum = row.reduce((sum, value, i) => { 
      const valueToDevice = row.find((rowValue, j) => value / rowValue % 1 === 0 && i !== j)

      if (valueToDevice) {
        return value / valueToDevice
      }
      return sum
    }, 0)
    
    return sum + rowChecksum
  }, 0)
}