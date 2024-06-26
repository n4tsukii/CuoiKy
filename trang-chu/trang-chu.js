function toggleLike(element) {
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');
    element.style.color = element.style.color === 'red' ? '' : 'red';
  }