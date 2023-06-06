'use strict';

const js_menu = document.querySelector('.js_menu');
const js_bars = document.querySelector('.js_bars');
const js_column = document.querySelector('.js_column');
const js_cross = document.querySelector('.js_cross');


const open = () => {
    js_column.style.transition= 'all ease-out .5s';
    js_column.style.transform= 'translateX(0)';
}
const close = () => {
    js_column.style.transition= 'all ease-out .5s';
    js_column.style.transform= 'translateX(-100%)';

}
const hoverin = () => js_cross.style.color='rgb(238, 108, 238)';
const hoverout = ()  => js_cross.style.color='white'
    

js_menu.addEventListener("click", open);
js_bars.addEventListener("click", open);
js_cross.addEventListener("click", close);
js_cross.addEventListener("mouseover", hoverin);
js_cross.addEventListener("mouseout", hoverout);