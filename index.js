const heroBtn = document.querySelector('.hero-btn');
const burgerBtn = document.querySelector('.burger-btn');

const modalWindow = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav-backdrop');

heroBtn.addEventListener('click', () => toggleModal(modalWindow));
burgerBtn.addEventListener('click', () => toggleModal(mobileNav));

modalWindow.addEventListener('click', (e) => {
  const target = e.target.closest('.btn-close');
  if (!target) return;

  toggleModal(e.currentTarget);
});

mobileNav.addEventListener('click', (e) => {
  const target = e.target.closest('.btn-close');
  if (!target) return;

  toggleModal(e.currentTarget);
});

function toggleModal(ref) {
  ref.classList.toggle('is-opened');
  document.body.classList.toggle('modal-is-opened');
}
