

const products = [];
const url = new URL(location.href);


const portfolio = url.searchParams.get("portfolio");
const category = url.searchParams.get("category");

// Lọc theo brand
const filteredByportfolio = portfolio ? products.filter(() => true) : products;

// Lọc theo category
const filteredByCategory = category
  ? filteredByportfolio.filter(() => true)
  : filteredByportfolio;



function updateParams(key, value) {
  const url = new URL(location.href);

  if (!value) {
    url.searchParams.delete(key);
  } else {
    url.searchParams.set(key, value);
  }

  window.location.replace(url);
}

$(function () {

  $("#category").change(function (e) {
    const val = $(this).val();

    updateParams("category", val);
  });

  $("#portfolio").change(function (e) {
    const val = $(this).val();

    updateParams("portfolio", val);
  });

});

//lọc 



 

document.getElementById("filter-button").addEventListener("click", function () {
  var portfolio = document.getElementById("portfolio").value; // Lấy giá trị của dropdown Danh mục
  var category = document.getElementById("category").value; // Lấy giá trị của dropdown Thể loại
  var priceFrom = document.querySelector(".price-from").value; // Lấy giá trị của input Mức giá từ
  var priceTo = document.querySelector(".price-to").value; // Lấy giá trị của input Mức giá đến

  // Lặp qua tất cả các sản phẩm
  var products = document.querySelectorAll(".list-product-all");
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    // Kiểm tra điều kiện lọc
    var matchPortfolio = portfolio === "" || product.getAttribute("data-portfolio") === portfolio;
    var matchCategory = category === "" || product.getAttribute("data-category") === category;
    var matchPrice = (priceFrom === "" || parseInt(product.querySelector(".price").textContent) >= parseInt(priceFrom)) &&
      (priceTo === "" || parseInt(product.querySelector(".price").textContent) <= parseInt(priceTo));

    // Ẩn hoặc hiển thị sản phẩm dựa trên kết quả lọc
    if (matchPortfolio && matchCategory && matchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
});