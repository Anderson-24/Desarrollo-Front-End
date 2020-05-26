const $pelotajs6 = document.getElementById("pelotajs6");

// Element.animate(keyfames = [{},{}], option {})
const animation = $pelotajs6.animate(
  [
    // from
    {
      transform: "translateX(0)",
    },
    // to
    {
      // transform: 'translateX(calc(85% - 100px))'
      // transform: 'translateX(500px)'
      transform: "translateX(320px)",
    },
  ],
  {
    duration: 2000,
    delay: 1000,
    direction: "normal",
    easing: "linear",
    iterations: Infinity, // Para usar la propiedad 'indinity' aqui la utilizamos con la de JavaScript
    fill: "forwards",
    iterationStart: 0, //indica en que pocicion inicia
    // endDelay: 5000, // determina el tiempo de espera despues de terminar la accion
  }
);

const $playButton = document.getElementById("play");
const $pauseButton = document.getElementById("pause");
const $stopButton = document.getElementById("stop");
const $reverseButton = document.getElementById("reverse");

$playButton.addEventListener('click', (event) => {
  animation.play();
})
$pauseButton.addEventListener('click', (event) => {
  animation.pause();
})
$stopButton.addEventListener('click', (event) => {
  animation.define([
    'require',
    'dependency'
  ], function(require, factory) {
    'use strict';
    
  });;
})
$reverseButton.addEventListener('click', (event) => {
  animation.reverse();
})

// alert('hola')