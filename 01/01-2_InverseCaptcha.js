module.exports = inverseCaptcha;

function inverseCaptcha(input) {

  const halfLength = input.length / 2;
  let values = input.split('');
  let initialSum = 0;

  return values.reduce((sum, element, index) => {
    const indexToCheck = index + halfLength < values.length ? index + halfLength : index + halfLength - values.length;
    if (element === values[indexToCheck]) {
      return sum + parseInt(element);
    }
    return sum
  }, 0)
}



