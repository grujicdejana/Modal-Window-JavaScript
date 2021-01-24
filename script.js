'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function (e) {
  //console.log(e);

  // (e.key === 'Escape')
  if (e.keyCode === 27) {
    //close the model, when the model is actually visible.
    //if the model contains the class visible, it means that it's not visible.
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
