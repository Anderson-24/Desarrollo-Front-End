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
      transform: "translateX(510px)",
    },
  ],
  {
    duration: 2000,
    // delay: 500,
    direction: "normal",
    easing: "linear",
    iterations: Infinity, // Para usar la propiedad 'indinity' aqui la utilizamos con la de JavaScript
    fill: "forwards",
    iterationStart: 0, //indica en que pocicion inicia
    // endDelay: 5000, // determina el tiempo de espera despues de terminar la accion
  }
);

// $pelotajs6.style.animationPlayState = "paused";

const $playButton = document.getElementById("play");
const $stopButton = document.getElementById("stop");
const $reverseButton = document.getElementById("reverse");
const $acelerarButton = document.getElementById("Acelerar");
const $FrenarButton = document.getElementById("Frenar");
const $SubirButton = document.getElementById("Subir");
const $lblSpeedButton = document.getElementById("lbl_Speed");

animation.playbackRate = 0

$playButton.addEventListener('click', (event) => {
  // animation.play();
  if ($playButton.innerHTML == "Pause") {
    $playButton.innerHTML = "Play";
  }else {
    $playButton.innerHTML = "Pause";
  }
  
  if ($playButton.innerHTML == "Play") {
    animation.pause();
    $playButton.innerHTML = "Play"
  } else {
    animation.play();
    $playButton.innerHTML = "Pause"
  }
})

$reverseButton.addEventListener('click', (event) => {
  animation.reverse();
})

$SubirButton.addEventListener('click', (event) => {
  if ($pelotajs6.style.gridArea == "top / top / top / top") {
    $SubirButton.innerHTML = "Subir";
    $pelotajs6.style.gridArea = "normal";
  } else {
    $SubirButton.innerHTML = "Bajar";
    $pelotajs6.style.gridArea = "top";
  }
})

$acelerarButton.addEventListener('click', (event) => {
  if (animation.playbackRate < 9.9){
    animation.playbackRate = animation.playbackRate + 0.1;
    if (animation.playbackRate >= 9.9) {
      $lblSpeedButton.innerText = `${animation.playbackRate.toFixed(1)}`; 
    }else {
      $lblSpeedButton.innerText = `0${animation.playbackRate.toFixed(1)}`; 
    }
  }
})

$FrenarButton.addEventListener('click', (event) => {
  if (animation.playbackRate > 0.1) {
    animation.playbackRate = animation.playbackRate - 0.1;
    $lblSpeedButton.innerText = `0${animation.playbackRate.toFixed(1)}`;
  }
})

$stopButton.addEventListener('click', (event) => {
  animation.cancel();
})

// alert('hola')