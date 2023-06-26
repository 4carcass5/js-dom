// BEGIN
export default getBroswerInfo = (url) => {
    const browserName = navigator.userAgent.split(' ')[0].substring(0);
    return browserName + ' ' + url;
  }
  
// END