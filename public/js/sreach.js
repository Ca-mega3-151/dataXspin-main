
//TÌm kiếm
$(document).ready(function () {
  $("#searchButton").click(function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    var searchTerm = $("#searchInput").val().toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển đổi thành chữ thường

    $(".item").each(function () {
      var productName = $(this).find(".name-product").text().toLowerCase(); // Lấy tên sản phẩm và chuyển đổi thành chữ thường

      if (productName.includes(searchTerm)) {
        $(this).parent().show(); // Hiển thị sản phẩm và phần tử cha
      } else {
        $(this).parent().hide(); // Ẩn sản phẩm và phần tử cha
      }
    });
  });
});



// lọc
// $(document).ready(function () {
//   $('#filter-button').click(function () {
//     var selectedPortfolio = $('#portfolio').val();
//     var selectedCategory = $('#category').val();
//     var priceFrom = $('.price-from').val();
//     var priceTo = $('.price-to').val();

//     $('.list-product-all').hide();

//     $('.list-product-all').each(function () {
//       var productPortfolio = $(this).attr('data-portfolio');
//       var productCategory = $(this).attr('data-category');
//       var productPrice = parseInt($(this).attr('data-price'));

//       if ((selectedPortfolio === '' || productPortfolio === selectedPortfolio) &&
//         (selectedCategory === '' || productCategory === selectedCategory) &&
//         (isNaN(priceFrom) || productPrice >= parseInt(priceFrom)) &&
//         (isNaN(priceTo) || productPrice <= parseInt(priceTo))) {
//         $(this).show();
//       }
//     });

//     var visibleProducts = $('.list-product-all:visible').length;
//     if (visibleProducts === 0) {
//       $('.No-products-match').show();
//     } else {
//       $('.No-products-match').hide();
//     }
//   });
// });

$(document).ready(function () {
  $('#filter-button').click(function () {
    const selectedPortfolio = $('#portfolio').val();
    const selectedCategory = $('#category').val();
    const priceFrom = $('.price-from').val();
    const priceTo = $('.price-to').val();

    $('.list-product-all').hide();

    const filterFunction = function (productPortfolio, productCategory, productPrice) {
      if ((selectedPortfolio === '' || productPortfolio === selectedPortfolio) &&
        (selectedCategory === '' || productCategory === selectedCategory) &&
        ((isNaN(priceFrom) || productPrice >= parseInt(priceFrom)) ||
        (isNaN(priceTo) || productPrice <= parseInt(priceTo)) ||
        (priceFrom === '' && priceTo === ''))) {
        return true;
      }
      return false;
    };

    $('.list-product-all').each(function () {
      const productPortfolio = $(this).attr('data-portfolio');
      const productCategory = $(this).attr('data-category');
      const productPrice = parseInt($(this).attr('data-price'));

      if (filterFunction(productPortfolio, productCategory, productPrice)) {
        $(this).show();
      }
    });

    const visibleProducts = $('.list-product-all:visible').length;
    if (visibleProducts === 0) {
      $('.No-products-match').show();
    } else {
      $('.No-products-match').hide();
    }
  });
});


