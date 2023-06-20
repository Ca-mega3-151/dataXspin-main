
function updateCartInfo() {
  const emptyCart = document.querySelector(".shopping-cart-empty");
  const shoppingCart = document.querySelector(".cart-main");
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");
  const totalQuantityElement = document.querySelector(".count-product");


  if (cartItems.length == 0) {
    emptyCart.style.display = "block";
    shoppingCart.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    shoppingCart.style.display = "table";
  }

  let totalQuantity = 0;
  let totalPrice = 0;
 

  cartItems.forEach((cartItem) => {
    const price = +cartItem.querySelector("#product-price").textContent;
    const quantity = +cartItem.querySelector(".quantity").textContent;
    const totalPriceProduct = cartItem.querySelector(".total-product");
  
    totalPriceProduct.textContent = price * quantity;
  
    totalQuantity += quantity;
    totalPrice += price * quantity;
  });
  
  totalPriceElement.textContent = totalPrice;
  totalQuantityElement.textContent = totalQuantity;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  
  if (cart.items.length > 0) {
    cart.items = cart.items.map((item) => ({
      
      ...products[item.id],
      quantity: item.quantity,

    }));

    const items = cart.items
      .map(
        (item) => `
        <div class="cart-item position-relative">
        <div class="delete-product-cart position-absolute end-0 top-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
               </div>
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="img-cart-product">
              <img src="${item.thumbnail}" class="mw-100 mh-100" alt=" ${item.title}">
            </div>
          </div>

          <div class="col-0 col-lg-8 ">
            <div class="information-cart-product space-between mh-100 ">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <h2>${item.title}</h2>
                </div>


                <div class="col-0 col-xl-6 space-between">
                  <div class="product-quantity  ">
                    <button class="btn-down">-</button>
                    <span class="quantity text-center">${item.quantity}</span>
                    <button class="btn-up">+</button>
                  </div>
                  <p class="product-price" id="product-price">${item.price}</p>
                </div>
              </div>
            </div>
            <div class="delete-cart space-between mt-1 mt-sm-2 mt-lg-2 mt-xl-4">
              <div>
                <div class="status">
                  Tình trạng :
                  <span class="status-product">${item.status}</span>
                </div>
              </div>
              <div >
                Tổng tiền : 
                <span class="total-product">
                
                </span> 
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      )
      .join("");

    document.querySelector(".cart-items").innerHTML = items;

    updateCartInfo();
  }
}



renderCart();


//giảm 
const downButtons = document.querySelectorAll("button.btn-down");

downButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling;

    const current = +quantityElement.textContent;

    if (current > 1) {
      quantityElement.textContent = current - 1;
      updateCartInfo();
    }
  });
});

// tăng
const upButtons = document.querySelectorAll(".btn-up");
upButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling;

    const current = +quantityElement.textContent;

    quantityElement.textContent = current + 1;
    updateCartInfo();
  });
});

const deleteButtons = document.querySelectorAll(".delete-product-cart");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cartItemElement = button.closest(".cart-item");

    cartItemElement.remove();
    updateCartInfo();
  });
});



// function renderCart() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };


//   const emptyCart = document.querySelector(".shopping-cart-empty");
//     const shoppingCart = document.querySelector(".cart-main");
//     // const cartItems = document.querySelectorAll(".cart-item");
//     const totalPriceElement = document.querySelector(".total-price");
//     const totalQuantityElement = document.querySelector(".count-product");

//   if (cart.items.length > 0) {
//     const items = cart.items.map((item) => ({
//       ...products[item.id],
//       quantity: item.quantity
//     }));

//     const $items = $.map(items, (item) => {
//       const $item = $(`
//               <div class="cart-item position-relative">
//               <div class="delete-product-cart position-absolute end-0 top-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
//                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                       </svg>
//                      </div>
//               <div class="row">
//                 <div class="col-12 col-lg-4">
//                   <div class="img-cart-product">
//                     <img src="${item.thumbnail}" class="mw-100 mh-100" alt=" ${item.title}">
//                   </div>
//                 </div>
      
//                 <div class="col-0 col-lg-8 ">
//                   <div class="information-cart-product space-between mh-100 ">
//                     <div class="row">
//                       <div class="col-12 col-sm-6">
//                         <h2>${item.title}</h2>
//                       </div>
      
      
//                       <div class="col-0 col-xl-6 space-between">
//                         <div class="product-quantity  ">
//                           <button class="btn-down">-</button>
//                           <span class="quantity text-center">${item.quantity}</span>
//                           <button class="btn-up">+</button>
//                         </div>
//                         <p class="product-price" id="product-price">10000</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="delete-cart space-between mt-1 mt-sm-2 mt-lg-2 mt-xl-4">
//                     <div>
//                       <div class="status">
//                         Tình trạng :
//                         <span class="status-product">${item.status}</span>
//                       </div>
//                     </div>
//                     <div >
//                       Tổng tiền : 
//                       <span class="total-product">
//                       ${item.quantity * item.price}
//                       </span> 
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//       `);

//       $(".btn-down", $item).on("click", () => {
//         // Tìm item trong giỏ hàng khớp với id
//         const cartItem = cart.items.find((cartItem) => cartItem.id == item.id);

//         if (cartItem.quantity > 1) {
//           cartItem.quantity--;

//           localStorage.setItem("cart", JSON.stringify(cart));
//           renderCart();
//         }
//       });

//       $(".btn-up", $item).on("click", () => {
//         // Tìm item trong giỏ hàng khớp với id
//         const cartItem = cart.items.find((cartItem) => cartItem.id == item.id);

//         cartItem.quantity++;

//         localStorage.setItem("cart", JSON.stringify(cart));
//         renderCart();
//       });

//       $(".btn-delete", $item).on("click", () => {
//         // Tìm item trong giỏ hàng khớp với id
//         const cartItemIndex = cart.items.findIndex(
//           (cartItem) => cartItem.id == item.id
//         );

//         cart.items.splice(cartItemIndex, 1);

//         localStorage.setItem("cart", JSON.stringify(cart));
//         renderCart();
//       });

//       return $item;
//     });

//     const total = items.reduce(
//       (total, item) => {
//         total.price += item.price * item.quantity;
//         total.quantity += item.quantity;

//         return total;
//       },
//       {
//         price: 0,
//         quantity: 0
//       }
//     );

//     $(".cart-item").empty().append($items);
//     emptyCart.style.display = "none";
//     shoppingCart.style.display = "table";
//     totalQuantityElement.textContent = total.quantity;
//     totalPriceElement.textContent = total.price;
//   } else {
//     emptyCart.style.display = "block";
//     shoppingCart.style.display = "none";
//   }
// }

// renderCart();