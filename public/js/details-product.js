const btnAddToCarts = document.querySelectorAll(".btn-add-to-cart");

btnAddToCarts.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const productCard = btn.closest(".feature-product-card");

    const productId = productCard.dataset.productId;

    const cart = JSON.parse(localStorage.getItem("cart")) || {
      items: []
    };

    const item = cart.items.find((item) => item.id == productId);

    if (item) {
      item.quantity++;
    } else {
      cart.items.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toastr.success("Thêm sản phẩm vào giỏ hàng thành công");
  });
});

// {cart: {items: [ {id: ?, quantity: ?} ]}}
