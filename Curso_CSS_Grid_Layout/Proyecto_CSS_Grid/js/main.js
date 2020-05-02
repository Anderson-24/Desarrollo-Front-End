const menu = document.querySelector(".menu");
const burgerbutton = document.querySelector("#burger-menu");
const ipad = window.matchMedia("screen and (max-width: 100vw)");
// console.log(ipad);

ipad.addListener(validation);

function validation(retorna) {
  // console.log(retorna);
  if (retorna.matches) {
    burgerbutton.addEventListener("click", hideShow);
  } else {
    burgerbutton.removeEventListener("click", hideShow);
  }
}

validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-menu-active")) {
    menu.classList.remove("is-menu-active");
  } else {
    menu.classList.add("is-menu-active");
  }
}

// var hola = prompt('hola')
