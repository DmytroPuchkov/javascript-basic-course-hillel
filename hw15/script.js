let Kitchen = { category: 'kitchen' };
let Devices = { category: 'devices' };
let Cosmetics = { category: 'cosmetics' };

let kitchenProducts = [
  {
    type: 'grater',
    price: 10
  },
  {
    type: 'pastry-bag',
    price: 25
  },
  {
    type: 'scale',
    price: 5
  },
  {
    type: 'whisk',
    price: 15
  }
].map(product => {
  let newProduct = Object.create(Kitchen);
  newProduct.type = product.type;
  newProduct.price = product.price;
  return newProduct;
});

let devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000]
  },
  {
    type: 'laptop',
    price: [50, 1500]
  },
  {
    type: 'smartphone',
    price: [80, 2000]
  },
  {
    type: 'tablet',
    price: [20, 1300]
  }
].map(product => {
  let newProduct = Object.create(Devices);
  newProduct.type = product.type;
  newProduct.price = product.price;
  return newProduct;
});

let cosmeticsProducts = [
  {
    type: 'blush',
    price: 100
  },
  {
    type: 'eyeshadow',
    price: 50
  },
  {
    type: 'lipstick',
    price: 80
  },
  {
    type: 'nail-polish',
    price: 200
  },
  {
    type: 'perfume',
    price: 300,
  }
].map(product => {
  let newProduct = Object.create(Cosmetics);
  newProduct.type = product.type;
  newProduct.price = product.price;
  return newProduct;
});

const contentDiv = document.getElementById('content');

function createCard(product, category) {
  let cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  let imagePath = `images/${category}/${product.type}.svg`;

  cardDiv.innerHTML = `
        <img src="${imagePath}" alt="${product.type}">
        <p>Name: <span>${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</span></p>
        <p>Price: <span>${Array.isArray(product.price) ? `$${product.price[0]}-$${product.price[1]}` : `$${product.price}`}</span></p>`;
  return cardDiv;
}

function renderCategory(categoryName, productsArray) {
  let categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';

  let categoryHTML = `<h2>Category: ${categoryName}</h2><div class="card-items">`;

  productsArray.forEach(product => {
    let imagePath = `images/${categoryName}/${product.type}.svg`;
    categoryHTML += `
            <div class="card">
                <img src="${imagePath}" alt="${product.type}">
                <p>Name: <span>${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</span></p>
                <p>Price: <span>${Array.isArray(product.price) ? `$${product.price[0]}-$${product.price[1]}` : `$${product.price}`}</span></p>
            </div>`;
  });

  categoryDiv.innerHTML = categoryHTML;

  document.getElementById('content').appendChild(categoryDiv);
}

renderCategory('kitchen', kitchenProducts);
renderCategory('devices', devicesProducts);
renderCategory('cosmetics', cosmeticsProducts);