const $canasta11 = document.getElementById("canastajs11");
const $pelota5 = document.getElementById('pelotajs5')

// $pelota5.addEventListener('animationstart', (event) => {
// $pelota5.addEventListener('animationiteration', (event) => {
$pelota5.addEventListener('click', (event) => {
  if (event.animationName === 'rebote2'){
    // debugger
    $pelota5.style.animationName = "skewball"
    $canasta11.style.alignItems = 'center'
    $pelota5.style.animationDuration = '5s';
    $pelota5.style.animationIterationCount = 'infinite'
  }
})