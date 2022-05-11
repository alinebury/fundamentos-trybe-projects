const price = document.querySelector('.total-price');
const cart = document.querySelector('.cart__items');
const buttonClear = document.querySelector('.empty-cart');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image, salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', salePrice));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function addPrice(add) {
  const productItems = Number(price.innerHTML) + Number(add);
  price.innerText = productItems.toFixed(2);
}

function removePrice(li) {
  const n = Number(li.innerText.split(' ').pop().slice(1));
  const value = Number(price.innerText);
  price.innerText = Number(value - n).toFixed(2);
}

async function cartItemClickListener(event) {
  cart.removeChild(event.target);
  saveCartItems('cart', cart.innerHTML);
  removePrice(event.target);
}

function createCartItemElement({ sku, name, salePrice, image }) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.className = 'cart__item';
  li.innerHTML = `<img src="${image}"> <br> SKU: ${sku} <br> NAME: ${name} <br> PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  addPrice(salePrice);
  return li;
}

async function cartItem(id) {
  const product = await fetchItem(id);
  const item = {
    sku: product.id,
    image: product.thumbnail,
    name: product.title,
    salePrice: product.price,
  };
  cart.appendChild(createCartItemElement(item));
  saveCartItems('cart', cart.innerHTML);
}

function loading(element) {
  const screenLoading = createCustomElement('div', 'loading', 'Carregando...');
  element.appendChild(screenLoading);
}

async function createProductItem() {
  const items = document.querySelector('.items');
  loading(items);
  const products = await fetchProducts('computador');
  const screenLoading = document.querySelector('.loading');
  items.removeChild(screenLoading);
  products.results.forEach((product, index) => {
    const item = {
      sku: product.id,
      image: product.thumbnail,
      name: product.title,
      salePrice: product.price,
    };
    items.appendChild(createProductItemElement(item));

    const button = document.querySelectorAll('.item__add');
    button[index].addEventListener('click', () => cartItem(item.sku));
  });
}

buttonClear.addEventListener('click', () => {
  cart.innerText = '';
  price.innerText = '';
});

window.onload = () => {
  createProductItem();

  const savedCart = getSavedCartItems('cart');
  cart.innerHTML = savedCart;

  const elementLi = document.querySelectorAll('li');
  elementLi.forEach((element) => element.addEventListener('click', cartItemClickListener));
};