$(document).ready(function () {
    // Lắng nghe sự kiện nhập từ khóa vào ô tìm kiếm
    $("#search").on("keyup", function () {
      // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
      var searchKeyword = $(this).val().toLowerCase();
      // Lọc danh sách bài viết theo từ khóa tìm kiếm
      $("#list-product-search").filter(function () {
        // Hiển thị bài viết phù hợp với từ khóa tìm kiếm
        $(this).toggle($(this).text().toLowerCase().indexOf(searchKeyword) > -1);
        //Trong đoạn mã trên, ta đã sử dụng hàm toggle() của jQuery để hiển thị hoặc
        // ẩn các bài viết phù hợp với từ khóa tìm kiếm. Nếu chỉ số của từ khóa trong
        //nội dung của bài viết là -1, nghĩa là từ khóa không xuất hiện trong bài viết,
        // chúng ta sẽ ẩn bài viết đó bằng cách gọi phương thức toggle(false), ngược lại, chúng ta sẽ hiển thị bài viết đó bằng cách gọi phương thức toggle(true).
      });
    });
  });
