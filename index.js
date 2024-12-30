const NAV = document.querySelector("#nav");
const ABRIR = document.querySelector("#abrir");
const CERRAR = document.querySelector("#cerrar");

ABRIR.addEventListener("click", () => {
  NAV.classList.add("visible");
});

CERRAR.addEventListener("click", () => {
  NAV.classList.remove("visible");
});
