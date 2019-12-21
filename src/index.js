const flatten = (inputArray) => {
  let output = [];
  inputArray.forEach(element => {
    if (typeof element === 'number') {
      output.push(element);
    }
  })
  return output;
}

export default flatten;