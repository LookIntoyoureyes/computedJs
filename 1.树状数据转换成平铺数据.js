const obj = {
  'a': {
    'b': {
      'c': {
        'e': 'hahhah'
      }
    },
    'd': 'hhehe'
  }
}
//递归
// const getFlat = (obj, pre = '', result = {}) => {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof (obj[key]) === 'object') {
//         getFloat(obj[key], `${pre}${key}.`, result)
//       } else {
//         result[`${pre}${key}`] = obj[key]
//       }
//     }
//   }
//   return result
// }
// getFlat(obj)

//while循环
const getFlat = (obj) => {
  let result = {}
  let getArr = Object.entries(obj)
  while (getArr.length) {
    const [key, value] = getArr.pop()
    for (const [k, v] of Object.entries(value)) {
      if (typeof v === 'object') {
        getArr.push([`${key}.${k}`, v])
      } else {
        result[`${key}.${k}`] = v
      }
    }
  }
  return result
}
getFlat(obj)