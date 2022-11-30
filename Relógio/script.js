// Pegar elementos com DOM
const PONTOHORA = document.querySelector("#hour");
const PONTOMINUTO = document.querySelector("#minute");
const PONTOSEGUNDO = document.querySelector("#second");

// data atual
var data = new Date();

// ADICIONAR A HORA NO RELÓGIO
let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

let positionHora = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let positionMin = (min * 360) / 60 + (seg * (360 / 60)) / 60;
let PositionSeg = seg * 360 / 60;

function execultarRelogio() {

  positionHora = positionHora +(3/360)
  positionMin = positionMin +(6/60)
  PositionSeg = PositionSeg + 6

  // Controlar os ponteiros de acordo com a hora
  PONTOHORA.style.transform = "rotate(" + positionHora + "deg)";
  PONTOMINUTO.style.transform = "rotate(" + positionMin + "deg)";
  PONTOSEGUNDO.style.transform = "rotate(" + PositionSeg + "deg)";

}

var intervalo = setInterval (execultarRelogio, 1000)