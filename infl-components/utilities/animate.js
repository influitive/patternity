var $ = require('jquery');

var Animate = function(){
  function run(element, animation, infinite, animationEndCallback){
    if(isAnimationSupported()) {
      infinite = infinite || false;
      animationEndCallback = animationEndCallback || function(){};

      $(element).addClass("animated " + animation + isInfinite(infinite));

      $(element).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(event){
        $(event.target).removeClass('animated ' + animation + " infinite");
        animationEndCallback(event.target);
      });
    }
  }

  function isInfinite(infinite){
    return infinite ? " infinite" : "";
  }

  return {
    run : run
  };
};

var isAnimationSupported = function(){
  var animation = false,
      animationstring = 'animation',
      keyframeprefix = '',
      domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
      pfx  = '',
      elm = document.createElement('div');

  if( elm.style.animationName !== undefined ) { animation = true; }

  if( animation === false ) {
    for( var i = 0; i < domPrefixes.length; i++ ) {
      if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
        pfx = domPrefixes[ i ];
        animationstring = pfx + 'Animation';
        keyframeprefix = '-' + pfx.toLowerCase() + '-';
        animation = true;
        break;
      }
    }
  }

  return animation;
};

module.exports = new Animate();
