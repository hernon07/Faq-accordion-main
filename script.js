const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const grayText = btn.parentElement.nextElementSibling;
    grayText.classList.toggle("hide");

    if (grayText.classList.contains("hide")) {
      btn.setAttribute("src", "assets/icon-plus.svg");
    } else {
      btn.setAttribute("src", "assets/icon-minus.svg");
    }
  });
});
