// url query
export function params2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1])
  if (!search) return {};
  const obj = {};
  const searchArr = search.split('&');
  searchArr.forEach(s => {
    let index = s.indexOf('=');
    if (index !== -1) {
      let name = s.substring(0, index);
      let value = s.substring(index + 1, s.length);
      obj[name] = value
    }
  })
  return obj
}

// svg 图标id列表
export function getIconsList() {
  let list = [];
  let icons = document.querySelectorAll('svg symbol');
  for (let i = 0; i < icons.length; i++) {
    list.push(icons[i].id)
  }
  return list
}

/**
 * 防抖函数
 */
export function debounce(fn, wait) {
  let timer = null;
  return function () {
    let ctx = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, wait)
  }
}