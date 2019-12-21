# flatten

Flattens a JavaScript array containing nested arrays and integers. The `flatten` function invokes a recursive function called `pushToOutput` which checks each element in a given level of array for integers to push to the output array. Whenever `pushToOutput` encounters a nested array, it calls itself with the nested array as the new argument to repeat the same process in the next depth level.

I used Jest for testing.

## Instructions

Enter the following commands in terminal within your directory of choosing:
```
git clone https://github.com/schoinh/flatten
cd flatten
npm install
npm run test
```