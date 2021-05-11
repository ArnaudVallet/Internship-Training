function dateConvert(JavaScriptTimestamp){
  var date = new Date(JavaScriptTimestamp)
  return (
    date.getDate() +
    "-"+(date.getMonth()+1)+
    "-"+date.getFullYear()+
    "_"+date.getHours()+
    "-"+date.getMinutes()+
    "-"+date.getSeconds()
  );
}

module.exports = dateConvert;
