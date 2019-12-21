const flatten = (inputArray) => {
  let output = [];

  const pushToOutput = (array) => {
    array.forEach(element => {
      if (typeof element === 'number') {
        output.push(element);
      } else if (element.length) {
        return pushToOutput(element);
      }
    });
  }

  pushToOutput(inputArray);
  return output;
}

export default flatten;