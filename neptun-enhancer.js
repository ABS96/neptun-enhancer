// ==UserScript==
// @name Neptun enhancer
// @namespace http://abs.ezw.me
// @version 1.0
// @author ABS
// @description Make Neptun more ａｅｓｔｈｅｔｉｃ
// @match https://frame.neptun.bme.hu/*
// ==/UserScript==

let header_l = document.getElementsByClassName("main_header_l")[0];
let header_r = document.getElementsByClassName("main_header_r")[0];
header_l.style.backgroundImage = "url('https://i.imgur.com/N6mY4Uu.jpg')";
header_r.style.backgroundImage = "url('https://i.imgur.com/MINushH.jpg')";