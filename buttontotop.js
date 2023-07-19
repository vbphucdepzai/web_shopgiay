// Định nghĩa hàm scrollToTop để cuộn lên đầu trang
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Thay đổi 'scroll' thành 'smooth' để có chuyển động mượt hơn
  });
}

// Lấy phần tử có lớp CSS là '#slide'
var slide = document.querySelector("#slide");
// Lấy phần tử có lớp CSS là '.back_top'
var back_top = document.querySelector(".back_top");
// Đăng ký sự kiện 'scroll' cho cửa sổ trình duyệt
window.addEventListener("scroll", function () {
  // Lấy vị trí hiện tại của thanh cuộn
  var scrollPosition = window.scrollY;
  // Lấy vị trí của phần tử '#slide' so với đỉnh của trang
  var slidePosition = slide.offsetTop;
  // Kiểm tra nếu vị trí cuộn lớn hơn vị trí của '#slide'
  if (scrollPosition > slidePosition) {
    back_top.style.display = "block";
  } else {
    // Ẩn phần tử '.back_top'
    back_top.style.display = "none";
  }
});
