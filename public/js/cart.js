// Thêm vào giỏ hàng => localStorage

// Xoá sản phẩm

// Bấm nút delete để xoá sản phẩm
// Xoá trên giao diện
// Cập nhật thông tin giỏ hàng

// const deleteButtons = document.querySelectorAll(".cart-item-actions button");
// deleteButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const cartItemElement = button.closest(".cart-item");

//     cartItemElement.remove();
//     updateCartInfo();
//   });
// });

// // Cập nhật số lượng
// const downButtons = document.querySelectorAll(".btn-down");
// downButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const quantityElement = button.nextElementSibling;

//     const current = +quantityElement.textContent;

//     if (current > 1) {
//       quantityElement.textContent = current - 1;
//       updateCartInfo();
//     }
//   });
// });

// const upButtons = document.querySelectorAll(".btn-up");
// upButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const quantityElement = button.previousElementSibling;

//     const current = +quantityElement.textContent;

//     quantityElement.textContent = current + 1;
//     updateCartInfo();
//   });
// });

// Mã giảm giá

// function updateCartInfo() {
  
//   // const emptyCart = document.querySelector(".shopping-cart-empty");
//   // const shoppingCart = document.querySelector(".cart-main");
//   const cartItems = document.querySelectorAll(".cart-item");
//   const totalPriceElement = document.querySelector(".total-price");
//   const totalQuantityElement = document.querySelector(".count-product");

//   // if (cartItems.length == 0) {
//   //   emptyCart.style.display = "block";
//   //   shoppingCart.style.display = "none";
//   // } else {
//   //   emptyCart.style.display = "none";
//   //   shoppingCart.style.display = "table";
//   // }

//   let totalQuantity = 0;
//   let totalCart = 0;

//   cartItems.forEach((item) => {
//     const price = document.querySelector(".product-price").textContent;
//     const quantity = document.querySelector(".quantity").textContent;
//     // const downButton = cartItem.querySelector(".btn-down");
//     // const totalItem = cartItem.querySelector(".total-price");
//     // Cập nhật giá tiền cho từng item
//    const totalItem = price * quantity;

//     totalQuantity += quantity;
//     totalCart += totalItem;

//     // downButton.disabled = quantity == 1;
//   });

//   // totalPriceElement.textContent = totalCart;
//   // totalQuantityElement.textContent = totalQuantity;
//   totalPriceElement.append(totalCart);
//   totalQuantityElement.append(totalQuantity);
// }

function updateCartInfo() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");
  const totalQuantityElement = document.querySelector(".count-product");

  let totalQuantity = 0;
  let totalCart = 0;

  cartItems.forEach((item) => {
    const price = item.querySelector(".product-price").textContent;
    const quantity = item.querySelector(".quantity").textContent;
    const totalItem = price * quantity;

    totalQuantity += parseInt(quantity);
    totalCart += totalItem;
  });

  totalPriceElement.textContent = totalCart;
  totalQuantityElement.textContent = totalQuantity;
}

// function renderCart() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

//   if (cart.items.length > 0) {
//     cart.items = cart.items.map((item) => ({
//       ...products[item.id],
//       quantity: item.quantity
//     }));

    


//     const items = cart.items
//       .map(
//         (item) => `
//         <div class="cart-items ">
//         <div class="row">
//           <div class="col-4">
//             <div class="img-cart-product">
//               <img src="${item.thumbnail}" class="mw-100" alt="${item.title}">
//             </div>
//           </div>

//           <div class="col-8">
//             <div class="information-cart-product space-between">
//               <h2>${item.title}</h2>
//               <div class="product-quantity ">
//                 <button class="btn-down">-</button>
//                 <span class="quantity">${item.quantity}</span>
//                 <button class="btn-up">+</button>
//               </div>
//               <p>${item.price} đ</p>
//             </div>

//             <div class="delete-cart space-between">
//               <div>
                
//                 <div>
//                   Tình trạng :
//                   <span class="status-product">${item.status}</span>
//                 </div>
//               </div>
//               <button type="button" class="delete-cart-product">
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `
//       )
//       .join("");

//     document.querySelector("div.cart-items").innerHTML = items;

//     updateCartInfo();
//   }
// }

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
        <div class="cart-items ">
         <div class="row">
          <div class="col-4">
            <div class="img-cart-product">
              <img src="${item.thumbnail}" class="mw-100" alt="${item.title}">
            </div>
          </div>

          <div class="col-8">
            <div class="information-cart-product space-between">
              <h2>${item.title}</h2>
              <div class="product-quantity ">
                <button class="btn-down">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="btn-up">+</button>
              </div>
              <p>${item.price} đ</p>
            </div>

            <div class="delete-cart space-between">
              <div>
                <div>
                  Tình trạng :
                  <span class="status-product">${item.status}</span>
                </div>
              </div>
              <button type="button" class="delete-cart-product">
                Delete
              </button>
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
