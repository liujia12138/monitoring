
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
      let value = s.substring(index+1, s.length);
      obj[name] = value
    }
  })
  return obj
}