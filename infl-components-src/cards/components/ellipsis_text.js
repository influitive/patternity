const $ = require('jquery');

const EllipsisText = function() {

  function run(element, maxHeight) {
    if (element.scrollHeight >= maxHeight) {
      ellipsisElementText(element, maxHeight);
    }
  }

  function ellipsisElementText(element, maxHeight) {
    convertWordsToElements(element);
    removeLastVisibleWord(element);
    showHiddenWords(element);
    const lastVisibleWordElement = findLastVisibleWord(element, maxHeight);
    addEllipsis(lastVisibleWordElement)
  }

  function convertWordsToElements(element) {
    if (wordsHaveNotAlreadyBeenConverted(element)) {
      $(element).html('<span>' + $(element).html().replace(/ /g,'</span> <span>') + '</span>');
    }
  }

  function wordsHaveNotAlreadyBeenConverted(element) {
    return element.children.length === 0;
  }

  function removeLastVisibleWord(element) {
    $(element).find('.last-visible-word').removeClass('last-visible-word');
  }

  function showHiddenWords(element) {
    $(element).find('.hide-overflow-word').removeClass('hide-overflow-word');
  }

  function findLastVisibleWord(element, maxHeight) {
    const words = $(element).find('span');
    let lastVisibleWordElement = null;

    for (let i = 0; i < words.length; i++) {
      if (lastVisibleWordElement == null) {
        if (($(words[i]).position().top + $(words[i]).height()) >= maxHeight) {
          lastVisibleWordElement = words[i-1];
          hideOverflowWord(words[i]);
        }
      } else {
        hideOverflowWord(words[i]);
      }
    }

    return lastVisibleWordElement;
  }

  function hideOverflowWord(overflowWordElement) {
    $(overflowWordElement).addClass('hide-overflow-word');
  }

  function addEllipsis(lastVisibleWordElement) {
    $(lastVisibleWordElement).addClass('last-visible-word');
  }

  return {
    run: run
  }
};

const ellipsisText = new EllipsisText();

export default ellipsisText;
