const sign = document.querySelector('.sign-xspin')
const formSign = document.querySelector('.sign-login')
const x = document.querySelector('.close')
const xmomo = document.querySelector('.xmomo')
const momolink = document.querySelector(`.momopaylink`);
const momo = document.querySelector(`.momopay`);
const vnpay = document.querySelector(`.Recharge`);




sign.addEventListener('click', function (e) {
    e.preventDefault;
    formSign.classList.add('show');
    formSign.classList.remove('hide');
    document.body.classList.add('bg-sign');
})

x.addEventListener('click', function (e) {
    e.preventDefault
    formSign.classList.add('hide')

})



momolink.addEventListener('click', function (e) {
    e.preventDefault();
    momo.classList.add('show');
    momo.classList.remove('hide');
    
})
vnpay.addEventListener('click', function (e) {
    e.preventDefault();
    momo.classList.add('show');
    momo.classList.remove('hide');
    
})
console.log(xmomo)

xmomo.addEventListener('click', function (e) {
    e.preventDefault();
    momo.classList.add('hide');
})


//đăng nhập

formSign.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn form submit

    // Lấy giá trị từ trường input
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === "admin" && password === "12345678") {
        // Đăng nhập thành công, chuyển hướng người dùng đến trang thành công
        window.location.href = "user1.html";
    } else {
        // Hiển thị thông báo lỗi đăng nhập
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Tên đăng nhập hoặc mật khẩu không chính xác.";
    }
});

// đăng kí

$(document).ready(function() {
    $(".form-register").submit(function(event) {
      event.preventDefault(); // Ngăn chặn form submit
      // Lấy giá trị từ các trường input
      const username = $(".username").val();
      const password = $(".password").val();
      const confirmPassword = $(".resetpassword").val();
      const phone = $(".numberphone").val();
  
      // Kiểm tra tên đăng nhập
      const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
      if (!usernamePattern.test(username)) {
        displayErrorMessage("Tên đăng nhập không hợp lệ. Tên đăng nhập chỉ chứa chữ cái, chữ số và dấu gạch dưới, bắt đầu bằng chữ cái và có độ dài từ 4 đến 16 ký tự.");
        return;
      }
  
      // Kiểm tra mật khẩu
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (!passwordPattern.test(password)) {
        displayErrorMessage("Mật khẩu không hợp lệ. Mật khẩu phải chứa ít nhất 8 ký tự, gồm chữ hoa, chữ thường và số.");
        return;
      }
  
      // Kiểm tra xác nhận mật khẩu
      if (password !== confirmPassword) {
        displayErrorMessage("Xác nhận mật khẩu không khớp.");
        return;
      }
  
      // Kiểm tra số điện thoại
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(phone)) {
        displayErrorMessage("Số điện thoại không hợp lệ. Số điện thoại phải gồm 10 chữ số.");
        return;
      }
  
      // Nếu không có lỗi, tiến hành xử lý đăng ký
      // ...
    });
  });
  
  function displayErrorMessage(message) {
    $(".error-message").text(message);
  }
  