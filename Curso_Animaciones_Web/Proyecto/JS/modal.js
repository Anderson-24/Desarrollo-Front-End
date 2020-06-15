const $imgModal = document.getElementById('modal_img')
const $ovelay = document.getElementById("modal_overlay");
const $modal = document.getElementById("modal");
const $btnClose = document.getElementById("modal_close");
const $btnGood = document.getElementById("modal_primary");
const $btnBad = document.getElementById("modal_warning");

function closeModal (){
  $modal.style.animation = 'modalOut 1s forwards';
  $ovelay.classList.toggle("modal_active");
}

$btnClose.addEventListener('click', (event) => {
  closeModal();
});

$btnGood.addEventListener("click", (event) => {
  closeModal();
});

$btnBad.addEventListener("click", (event) => {
  closeModal();
});

$imgModal.addEventListener('click', (event)=>{
  $modal.style.animation = 'modalIn 1s forwards';
  $ovelay.classList.toggle("modal_active");
})

$ovelay.addEventListener('click',(event) =>{
  if (event.path[0].id == "modal_overlay"){
    closeModal();
  } 
})

// alert('hola desde el modal')
