function customFilter(array, callbak) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callbak(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
function customMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function customReduce(array, callback) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
}
module.exports={customFilter, customMap,customReduce};
