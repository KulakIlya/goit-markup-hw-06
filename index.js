const heroBtn = document.querySelector('.hero-btn');
const modalWindow = document.querySelector('.backdrop');

heroBtn.addEventListener('click', toggleModal);

modalWindow.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('btn-close')) {
    toggleModal();
  }
});

function toggleModal() {
  modalWindow.classList.toggle('is-open');
}
