function customFilter(array, callbak) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callbak(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports={customFilter};
