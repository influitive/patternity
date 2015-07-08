var HTML = function(){
  function addLineBreaks(str) {
    //It was adding </br> after li elements
    return str.replace(/[^\<\/li\>]\n/g, "<br />");
  }

  return {
    addLineBreaks : addLineBreaks
  };
};

module.exports = new HTML();
