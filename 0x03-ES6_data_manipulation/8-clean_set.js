export default function cleanSet(set, startString) {
  let String = '';
  const strArray = [];

  if (startString && typeof startString === 'string') {
    for (const str of set) {
      if (str && str.startsWith(startString)) {
        strArray.push(str.slice(startString.length));
      }
    }
    String = strArray.join('-');
  }
  return String;
}
