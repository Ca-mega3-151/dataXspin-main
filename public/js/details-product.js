
var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});


function renderProductDetails(){
  const details = JSON.parse(localStorage.getItem("item")) || { items: [] };
  
  if (details.items.length > 0) {
    details.items = details.items.map((item) => ({
      ...products[item.id],
      quantity: item.quantity
    }));

    const items = details.items
      .map(
        (item) => `
        <article  class="feature-product-card" data-product-id="${item.id}">
        <div class="container">
            <div class="row">    
                <div class="col-6">
                  <div class="img-product">
                    <img src=${item.thumbnail} width=100% alt="${item.title}">
                </div>
              </div>
                <div class="col-6">
                  <div class="introduce-product">
                    <h1>
                    ${item.title}
                    </h1>
                    <p> Tình trạng : ${item.status} </p>
                    <p> Thể loại  :${item.category} </p>
                    <p class="price">${item.price}</p>
                  </div>

                  <div class="cart-product">
                    <a href="" class="btn-add-to-cart flex">
                      <i class='bx bx-cart ' ></i>
                      <p>Thêm vào giỏ hàng</p>
                    </a>
                  </div>
                </div>
            
            </div>

            <div class="details " >
              <h4> EA SPORTS™ FIFA 21 Champions Edition</h4>
              <div class="details-main mt-5 ">
                <div class="flex row">
                  <div class="col-2">
                    <p>Chi tiết sản phẩm</p>
                  </div>

                  <div class="col-10">
                    <h2>
                      EA SPORTS™ FIFA 21 Champions Edition</h2>
                      <h5>1.  Phiên bản Champions (Ultimate) khác gì so với bản thường?</h5>
                      <p>Về nội dung sẽ không thêm gì, tuy nhiên bạn sẽ nhận được 4600 FIFA Points. Đây là đơn vị tiền tệ dùng để trao đổi vật phẩm trong chế độ Ultimate Team của game.</p>
                      <h5>2. Game có hỗ trợ tay cầm chứ?</h5>  
                      <p>Có. Tuy nhiên bạn nên sử dụng tay cầm chính hãng như Dualshock của PS4 hoặc Xbox thay vì sự dụng tay cầm từ các hãng thứ 3. </p>                
                      <h5>3. Tôi có thể chơi với bạn bè đã mua game từ nền tảng Origin không?</h5>
                      <p>Hoàn toàn có thể.</p>
                    </div>
                </div>
              </div>
        </div>
        </div>
      </article>
    </div>
      
      `
      )
      .join("");

    document.querySelector("#list-product-search").innerHTML = items;

  }
}

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

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



