//phần header
window.addEventListener("DOMContentLoaded", function () {
  // Lấy liên kết "HOME" trong menu
  var homeLink = document.querySelector(".menu a");

  if (homeLink) {
    // Gắn sự kiện click vào liên kết "HOME"
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      // Cuộn trang lên đầu
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
//phần footer
window.addEventListener("DOMContentLoaded", function () {
  var homeLink = document.querySelector(".footer_menu a");

  if (homeLink) {
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
//search
document.getElementById("searchButton").addEventListener("click", function () {
  var searchContainer = document.querySelector(".search");
  searchContainer.classList.toggle("show");
});
