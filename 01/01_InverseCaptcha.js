module.exports = inverseCaptcha;


function inverseCaptcha(input) {

  let values = input.split('');
  let initialSum = 0;

  const lastValue = values[values.length - 1];
  if (lastValue === values[0]) {
    initialSum = parseInt(lastValue);
  }
  return values.reduce((sum, element, index) => {
    if (element === values[index - 1]) {
      return sum + parseInt(element, 10);
    }
    return sum
  }, initialSum)
}



