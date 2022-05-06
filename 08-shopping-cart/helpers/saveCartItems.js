const saveCartItems = (name, items) => {
  localStorage.setItem(name, items);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
