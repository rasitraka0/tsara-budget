export function showSection(idName) {
  document.querySelectorAll('.section').forEach((s) => {
    s.classList.remove('active');
  });
  document.querySelector(idName).classList.add('active');
}

export function showMenu(idName) {
  document.querySelectorAll('.menu-item').forEach((m) => {
    m.classList.remove('active');
  });
  document.querySelector(idName).classList.add('active');
}

export function showModalDetail(idName) {
  document.querySelector(idName).classList.add('active');
}
