"use strict";

const js_bars = document.querySelector(".js_bars");
const js_column = document.querySelector(".js_column");
const js_cross = document.querySelector(".js_cross");
const js_menu_element1 = document.querySelector(".js_menu_element1");
const js_menu_element2 = document.querySelector(".js_menu_element2");
const js_menu_element3 = document.querySelector(".js_menu_element3");
const js_arrow = document.querySelector(".js_arrow");

const open = () => {
	js_column.style.transition = "all ease-out .5s";
	js_column.style.transform = "translateX(0)";
};
const close = () => {
	js_column.style.transition = "all ease-out .5s";
	js_column.style.transform = "translateX(-100%)";
};
const hoverin = () => {
	js_cross.style.color = "rgb(238, 108, 238)";
	js_cross.style.cursor = "pointer";
};
const hoverout = () => (js_cross.style.color = "white");

const apperarArrow = () => {
	js_arrow.classList.remove("collapsed");
};

js_bars.addEventListener("click", open);
js_cross.addEventListener("click", close);
js_cross.addEventListener("mouseover", hoverin);
js_cross.addEventListener("mouseout", hoverout);
js_menu_element1.addEventListener("click", close);
js_menu_element2.addEventListener("click", close);
js_menu_element3.addEventListener("click", close);

window.addEventListener("scroll", apperarArrow);

//# sourceMappingURL=main.js.map
