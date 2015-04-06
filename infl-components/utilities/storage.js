var Storage = function(){
  function getItem(key, defaultValue){
    var value = JSON.parse(window.localStorage.getItem(key));
    return value !== null ? value : defaultValue;
  }

  function setItem(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function removeItem(key){
    window.localStorage.removeItem(key);
  }

  return {
    getItem : getItem,
    setItem : setItem,
    removeItem : removeItem
  };
};

module.exports = new Storage();
