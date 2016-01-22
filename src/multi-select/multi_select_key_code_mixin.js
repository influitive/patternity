const isEmpty = require('lodash/lang/isEmpty');

const DOWN_ARROW_KEY_CODE = 40;
const UP_ARROW_KEY_CODE = 38;
const ENTER_KEY_CODE = 13;
const BACK_SPACE_KEY_CODE = 8;
const DELETE_KEY_CODE = 46;
const ESCAPE_KEY_CODE = 27;
const TAB_KEY_CODE = 9;

const acceptedKeyCodes = [
  DOWN_ARROW_KEY_CODE,
  UP_ARROW_KEY_CODE,
  ENTER_KEY_CODE,
  BACK_SPACE_KEY_CODE,
  DELETE_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE
];

const MultiSelectKeyCodeMixin = {
  _handleKeyDown: function(event) {
    if (acceptedKeyCodes.indexOf(event.keyCode) > -1) {
      event.stopPropagation();
      this._preventDefaultForTab(event);
      this._determineKeyCodeAction(event.keyCode);
    }
  },

  _preventDefaultForTab: function(event) {
    if (event.keyCode === TAB_KEY_CODE) {
      event.preventDefault();
    }
  },

  _determineKeyCodeAction: function(keyCode) {
    if (keyCode === ENTER_KEY_CODE) {
      this._handleEnter();
    } else if (keyCode === BACK_SPACE_KEY_CODE || keyCode === DELETE_KEY_CODE) {
      this._handleBackspaceDelete();
    } else if (keyCode === DOWN_ARROW_KEY_CODE || keyCode === TAB_KEY_CODE) {
      this._handleDownArrowTab();
    } else if (keyCode === UP_ARROW_KEY_CODE) {
      this._handleUpArrow();
    } else if (keyCode === ESCAPE_KEY_CODE) {
      this._hideOptions();
    }
  },

  _handleEnter: function() {
    if (this._anyOptionsToShow()) {
      this._handleOptionSelect(this.state.focusedOption);
    }
  },

  _handleBackspaceDelete: function() {
    if (this.state.selectedOptions.length > 0 && this.state.typeAhead.length === 0) {
      const optionToRemove = this.state.selectedOptions[this.state.selectedOptions.length - 1];
      this._handleSelectedOptionRemoved(optionToRemove);
    }
  },

  _handleDownArrowTab: function() {
    if (this._anyOptionsToShow()) {
      this._nextFocusedOption();
    }
  },

  _handleUpArrow: function() {
    if (this._anyOptionsToShow()) {
      this._previousFocusedOption();
    }
  },

  _nextFocusedOption: function() {
    const currentFocusedOptionIndex = this._findFocusedOptionIndex();

    let nextFocusedOption = {};
    for (let i = 0; i < this.state.options.length; i++) {
      if (i > currentFocusedOptionIndex && this._optionCanHaveFocus(this.state.options[i])) {
        nextFocusedOption = this.state.options[i]
        break;
      }
    }

    if (isEmpty(nextFocusedOption)) {
      for (let i = 0; i < this.state.options.length; i++) {
        if (this._optionCanHaveFocus(this.state.options[i])) {
          nextFocusedOption = this.state.options[i]
          break;
        }
      }
    }

    this.setState({
      focusedOption: nextFocusedOption
    });
  },

  _previousFocusedOption: function() {
    const currentFocusedOptionIndex = this._findFocusedOptionIndex();

    let previousFocusedOption = {};
    for (let i = this.state.options.length - 1; i >= 0 ; i--) {
      if (i < currentFocusedOptionIndex && this._optionCanHaveFocus(this.state.options[i])) {
        previousFocusedOption = this.state.options[i]
        break;
      }
    }

    if (isEmpty(previousFocusedOption)) {
      for (let i = this.state.options.length - 1; i >= 0; i--) {
        if (this._optionCanHaveFocus(this.state.options[i])) {
          previousFocusedOption = this.state.options[i]
          break;
        }
      }
    }

    this.setState({
      focusedOption: previousFocusedOption
    });
  },

  _findFocusedOptionIndex: function() {
    let currentFocusedOptionIndex = -1;

    for (let i = 0; i < this.state.options.length; i++) {
      if (this._isFocusedOption(this.state.options[i])) {
        currentFocusedOptionIndex = i;
        break;
      }
    }

    return currentFocusedOptionIndex;
  },

  _isFocusedOption: function(option) {
    return option.name === this.state.focusedOption.name && option.value === this.state.focusedOption.value
  }
};

module.exports = MultiSelectKeyCodeMixin;
