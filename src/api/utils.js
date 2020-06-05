export const getCount = (count) => {
  if (count < 0) {
    return
  }
  if (count < 10000) {
    return count
  } if (Math.floor(count / 10000) < 10000) {
    return `${Math.floor(count / 1000) / 10}万`
  }
  return `${Math.floor(count / 10000000) / 10}亿`
}

export const debounce = (func, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

export const filterIndex = (rankList) => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1
    }
  }
}
