const getSavedCartItems = (name) => localStorage.getItem(name);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
