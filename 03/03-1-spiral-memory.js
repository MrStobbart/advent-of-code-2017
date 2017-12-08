
module.exports = {
  spiralMemory,
  findLevel
}

console.log(spiralMemory(325489));
function spiralMemory(dataSquare, steps = 0, level = findLevel(dataSquare)) {

  if (level.i === 0) {
    return steps
  }

  const bottomRight = level.maxValue
  const bottomLeft = level.maxValue - level.i * 2
  const topLeft = level.maxValue - level.i * 4
  const topRight = level.maxValue - level.i * 6
  const innerBottomRight = level.maxValue - level.i * 8

  // edges
  if (dataSquare === bottomLeft || 
      dataSquare === bottomRight || 
      dataSquare === topLeft || 
      dataSquare === topRight || 
      dataSquare === innerBottomRight + 1) {
    dataSquare--
    return spiralMemory(dataSquare, ++steps)
  }

  // 1 above bottom right
  if (dataSquare === innerBottomRight + 1) {
    dataSquare--
    return spiralMemory(dataSquare, ++steps)
  }

  // bottom
  if (dataSquare < bottomRight && dataSquare > bottomLeft) {
    dataSquare = dataSquare - (7 + (level.i - 1) * 8)
    return spiralMemory(dataSquare, ++steps)
  }

  // left
  if (dataSquare < bottomLeft && dataSquare > topLeft) {
    dataSquare = dataSquare - (5 + (level.i - 1) * 8)
    return spiralMemory(dataSquare, ++steps)
  }

  // top
  if (dataSquare < topLeft && dataSquare > topRight) {
    dataSquare = dataSquare - (3 + (level.i - 1) * 8)
    return spiralMemory(dataSquare, ++steps)
  }

  // right
  if (dataSquare < topRight && dataSquare > innerBottomRight) {
    dataSquare = dataSquare - (1 + (level.i - 1) * 8)
    return spiralMemory(dataSquare, ++steps)
  }

  
  
}


function findLevel(dataSquare, iteration = 0, maxLevelValue = 1) {
  maxLevelValue += (8 * iteration)
  if (dataSquare <= maxLevelValue) {
    const maxLevel = maxLevelValue;
    return { i: iteration, maxValue: maxLevel };
  } else {
    return findLevel(dataSquare, ++iteration, maxLevelValue)
  }
}