export default (array, cb) => {
  let result = [];

  array.forEach(el => result.push(cb(el)));

  return result;
}
