const open = document.getElementById("info_pop");
const popup = document.getElementById("popup_container");
const close = document.getElementById("popup_close");

open.addEventListener("click", () => {
    popup.classList.add("show");
});

close.addEventListener("click", () => {
    popup.classList.remove("show");
});