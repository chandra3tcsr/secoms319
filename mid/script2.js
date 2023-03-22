fetch('data2.json')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const productsContainer = document.getElementById('products');
    for (let product of products) {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product');
      const productName = document.createElement('h2');
      productName.textContent = product.name;
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
      const button = document.createElement('a');
      button.classList.add('btn');
      button.textContent = 'Buy Now';
      productContainer.appendChild(productName);
      productContainer.appendChild(productImage);
      productContainer.appendChild(productDescription);
      productContainer.appendChild(productPrice);
      productContainer.appendChild(button);
      productsContainer.appendChild(productContainer);
    }
  })
  .catch(error => console.error(error));
