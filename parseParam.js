// 解析url参数为对象
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1];    // 将？后面的字符串取出来
  const paramsArr = paramsStr.split("&");        // 将字符串以&分割后存到数组中
  let paramsObj = {};
  // 将params存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) {                        // 处理有value的参数
      let [key, val] = param.split("=");          // 分割key和value
      val = decodeURIComponent(val);              // 解码
      val = /^\d+$/.test(val) ? parseFloat(val): val;   // 判断是否转为数字
      if (paramsObj.hasOwnProperty(key)) {         // 如果对象有key,则增加一个值
        paramsObj[key] = [].concat(paramsObj[key], obj);
      } else {
        paramsObj[key] = val;
      }
    } else {
      paramsObj[param] = true;
    }
  })

  return paramsObj;
}

console.log("parseParam:", parseParam('https://www.google.com/search?q=git+config+get-url&rlz=1C5CHFA_enPH789PH789&oq=git+config+get-url&aqs=chrome..69i57j69i64l2j69i59l3j69i60l2.3919j0j15&sourceid=chrome&ie=UTF-8'));