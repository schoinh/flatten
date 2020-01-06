// ----- Most concise way

const flatten = (array, output = []) => {
  array.forEach(element => {
    if (typeof element === 'number') {
      output.push(element);
    } else if (element.length) {
      flatten(element, output);
    }
  });
  return output;
}

// ----- Second way with accumulator

// const flatten = (inputArray) => {
//   const pushToOutput = (array, accumulate) => {
//     array.forEach(element => {
//       if (typeof element === 'number') {
//         accumulate.push(element);
//       } else if (element.length) {
//         return pushToOutput(element, accumulate);
//       }
//     });
//     return accumulate;
//   }
//   return pushToOutput(inputArray, []);
// }

// ----- Original way

// const flatten = (inputArray) => {
//   let output = [];

//   const pushToOutput = (array) => {
//     array.forEach(element => {
//       if (typeof element === 'number') {
//         output.push(element);
//       } else if (element.length) {
//         return pushToOutput(element);
//       }
//     });
//   }

//   pushToOutput(inputArray);
//   return output;
// }

export default flatten;