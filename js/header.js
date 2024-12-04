window.addEventListener("scroll", function () {
  const header = document.querySelector("#header .header-container");

  if (window.scrollY >= 700) {
    header.style.backgroundColor = "#4f9678";
    header.style.boxShadow = "0 0 16px 1px"
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "0 0 0 0"
  }
});

