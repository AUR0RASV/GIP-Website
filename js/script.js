function closeNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("show")) {
      var toggleButton = document.querySelector(".navbar-toggler");
      toggleButton.click();
    }
}