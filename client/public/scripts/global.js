function toggleHeaderBurgerMenu() {
  const el = document.querySelector("#burgerMenuList");

  el.classList.contains("burger-menu-content")
    ? el.classList.remove("burger-menu-content")
    : el.classList.add("burger-menu-content");
}

function changeLang(lang) {
  let newRoute = "";

  lang === "de"
    ? (newRoute = window.location.href.replace("/en", "/de"))
    : (newRoute = window.location.href.replace("/de", "/en"));

  window.location.replace(newRoute);
}
