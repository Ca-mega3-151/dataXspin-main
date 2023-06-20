

// const products = [];
// const url = new URL(location.href);


// const portfolio = url.searchParams.get("portfolio");
// const category = url.searchParams.get("category");

// // Lọc theo brand
// const filteredByportfolio = portfolio ? products.filter(() => true) : products;

// // Lọc theo category
// const filteredByCategory = category
//   ? filteredByportfolio.filter(() => true)
//   : filteredByportfolio;



// function updateParams(key, value) {
//   const url = new URL(location.href);

//   if (!value) {
//     url.searchParams.delete(key);
//   } else {
//     url.searchParams.set(key, value);
//   }

//   window.location.replace(url);
// }

// $(function () {

//   $("#category").change(function (e) {
//     const val = $(this).val();

//     updateParams("category", val);
//   });

//   $("#portfolio").change(function (e) {
//     const val = $(this).val();

//     updateParams("portfolio", val);
//   });

// });

//TÌm kiếm

$(document).ready(function () {
 
  $("#searchButton").click(function (event) {
    console.log(`ca`)
    event.preventDefault(); // Prevent the default form behavior

    var searchTerm = $("#searchInput").val().toLowerCase(); // Get the search term and convert it to lowercase

    $(".item").each(function () {
      var productName = $(this).find(".name-product").text().toLowerCase(); // Get the product name and convert it to lowercase

      if (productName.includes(searchTerm)) {
        $(this).show(); // Show the product
      } else {
        $(this).hide(); // Hide the product
      }
      

    });
  });
});


// lọc
$(document).ready(function () {
  $('#filter-button').click(function () {
    var selectedPortfolio = $('#portfolio').val();
    var selectedCategory = $('#category').val();
    var priceFrom = $('.price-from').val();
    var priceTo = $('.price-to').val();

    $('.list-product-all').hide();

    $('.list-product-all').each(function () {
      var productPortfolio = $(this).attr('data-portfolio');
      var productCategory = $(this).attr('data-category');
      var productPrice = parseInt($(this).attr('data-price'));

      if ((selectedPortfolio === '' || productPortfolio === selectedPortfolio) &&
        (selectedCategory === '' || productCategory === selectedCategory) &&
        (isNaN(priceFrom) || productPrice >= parseInt(priceFrom)) &&
        (isNaN(priceTo) || productPrice <= parseInt(priceTo))) {
        $(this).show();
      }
    });

    var visibleProducts = $('.list-product-all:visible').length;
    if (visibleProducts === 0) {
      $('.No-products-match').show();
    } else {
      $('.No-products-match').hide();
    }
  });
});

