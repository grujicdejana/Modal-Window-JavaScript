'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal(mdl) {
  mdl.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  openModal(btnsOpenModal[i]);
}

function closeModal(mdl) {
  mdl.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

closeModal(btnCloseModal);
closeModal(overlay);
