function stringLength(string) {
  let stringLenth =  string.length;
  if (stringLenth >= 1  && stringLenth <= 10){
    return stringLenth
  } else {
    return "The string doesnot meet the conditions";
  }
}

module.exports = stringLength;
