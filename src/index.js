const flatten = (inputArray) => {
  let output = [];
  inputArray.forEach(element => {
    if (typeof element === 'number') {
      output.push(element);
    } else if (element.length) {
      output.push(element[0]);
    }
  })
  return output;
}

export default flatten;