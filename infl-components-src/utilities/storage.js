const Storage = function() {
  function getItem(key, defaultValue) {
    const value = JSON.parse(window.localStorage.getItem(key));
    return value !== null ? value : defaultValue;
  }

  function setItem(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
      console.warn('Private browsing is preventing the app from running correctly.  Turn off private browsing for the best experience.');
    }
  }

  function removeItem(key) {
    window.localStorage.removeItem(key);
  }

  return {
    getItem:    getItem,
    setItem:    setItem,
    removeItem: removeItem
  };
};

module.exports = new Storage();
