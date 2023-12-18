const toggleArea = document.querySelector('.toggle-area');
const basicPrice = document.querySelector('.price--1');
const profiPrice = document.querySelector('.price--2');
const masterPrice = document.querySelector('.price--3');

toggleArea.addEventListener('click', function (e) {
  e.preventDefault();
  if (toggleArea.classList.contains('monthly')) {
    toggleArea.classList.remove('monthly');
    toggleArea.classList.add('annually');
    basicPrice.innerHTML = '<div class="price price--1">199.99</div>';
    profiPrice.innerHTML =
      '<div class="price professional price--2">249.99</div>';
    masterPrice.innerHTML = '<div class="price price--3">399.99</div>';
  } else {
    toggleArea.classList.remove('annually');
    toggleArea.classList.add('monthly');
    basicPrice.innerHTML = '<div class="price price--1">19.99</div>';
    profiPrice.innerHTML =
      '<div class="price professional price--2">24.99</div>';
    masterPrice.innerHTML = '<div class="price price--3">39.99</div>';
  }
});
