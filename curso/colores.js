// WRITE YOUR CODE IN HERE:// Select all <li> elements
const liElements = document.querySelectorAll('li');


liElements.forEach((li) => {
  li.classList.toggle('highlight');
});