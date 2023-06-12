
const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  
    if (cart.items.length > 0) {
      cart.items = cart.items.map((item) => ({
        ...products[item.id],
        quantity: item.quantity
      }));
    }

    console.log(cart)


function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  
    if (cart.items.length > 0) {
      cart.items = cart.items.map((item) => ({
        ...products[item.id],
        quantity: item.quantity
      }));
  
      const items = cart.items
        .map(
          (item) => `
          <div class="col-sm-6 col-md-4 col-xl-3">
          <div class="item">
              <img src=${item.thumbnail}
                  alt="${item.title}" />
              <p>${item.title}</p>
              <p>${item.price}</p>
          </div>
      </div>
        
        `
        )
        .join("");
  
      document.querySelector("#list-product-search").innerHTML = items;

    }
  }
  
  renderCart();
  

  