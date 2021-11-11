function capitaliseString(string) {
  const capitalisedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalisedString;
}

module.exports = capitaliseString;

