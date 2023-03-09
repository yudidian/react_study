export const cloneDeep = function (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  const type = Array.isArray(obj) ? [] : {}
  for (const objKey in obj) {
    console.log(objKey)
    if (obj.hasOwnProperty(objKey)) {
      type[objKey] = cloneDeep(obj[objKey])
    }
  }
  return type
}

