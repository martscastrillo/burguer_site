"use strict";const js_bars=document.querySelector(".js_bars"),js_column=document.querySelector(".js_column"),js_cross=document.querySelector(".js_cross"),js_menu_element1=document.querySelector(".js_menu_element1"),js_menu_element2=document.querySelector(".js_menu_element2"),js_menu_element3=document.querySelector(".js_menu_element3"),js_arrow=document.querySelector(".js_arrow"),open=()=>{js_column.style.transition="all ease-out .5s",js_column.style.transform="translateX(0)"},close=()=>{js_column.style.transition="all ease-out .5s",js_column.style.transform="translateX(-100%)"},hoverin=()=>{js_cross.style.color="rgb(238, 108, 238)",js_cross.style.cursor="pointer"},hoverout=()=>js_cross.style.color="white",apperarArrow=()=>{js_arrow.classList.remove("collapsed")};js_bars.addEventListener("click",open),js_cross.addEventListener("click",close),js_cross.addEventListener("mouseover",hoverin),js_cross.addEventListener("mouseout",hoverout),js_menu_element1.addEventListener("click",close),js_menu_element2.addEventListener("click",close),js_menu_element3.addEventListener("click",close),window.addEventListener("scroll",apperarArrow);