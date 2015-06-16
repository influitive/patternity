var HTML = function(){
  function addLineBreaks(str) {
    return str.replace(/\n/g, "<br />");
  }

  return {
    addLineBreaks : addLineBreaks
  };
};

module.exports = new HTML();
