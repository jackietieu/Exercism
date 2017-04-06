let filter = (array, cb, retain = true) => {
  let result = [];
  array.map(el => cb(el) ? (retain ? el : false) : (retain ? false : el))
       .forEach(el => {if (el) result.push(el)});
  return result;
};

export default {
  keep: (array, cb) => filter(array, cb),
  discard: (array, cb) => filter(array, cb, false)
}
