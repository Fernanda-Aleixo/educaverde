window.addEventListener("scroll", function () {
  const header = document.querySelector("#header .header-container");
  if (window.scrollY >= 750) {
    header.style.backgroundColor = "#4f9678";
  } else {
    header.style.backgroundColor = "rgba(19, 37, 30, 0.5)";
  }
});
