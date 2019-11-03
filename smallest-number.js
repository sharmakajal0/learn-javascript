points = [40, 100, 43, 874, 37, 78];

function smallest(array) {
  if (!(array instanceof Array)) {
    throw new TypeError('Only arrays are supported.');
  }
  
  if (array.length < 1) {
    throw "Empty array";
  }
  
  let smallest_value = array[0];
  for(let index = 1; index < array.length; index++) {
    if (smallest_value > array[index]) {
      smallest_value = array[index];
    }
  }
  
  return smallest_value;
}

console.log(smallest(points));