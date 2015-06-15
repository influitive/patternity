var $ = require('jquery');

var Animate = function(){
  function run(element, animation, infinite, animationEndCallback){
    infinite = infinite || false;
    animationEndCallback = animationEndCallback || function(){};

    $(element).addClass("animated " + animation + isInfinite(infinite));

    $(element).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(event){
      $(event.target).removeClass('animated ' + animation + " infinite");
      animationEndCallback();
    });
  }

  function isInfinite(infinite){
    return infinite ? " infinite" : "";
  }

  return {
    run : run
  };
};

module.exports = new Animate();
