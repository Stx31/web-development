// WRITE YOUR CODE IN HERE:
var containerDiv = document.getElementById('container');

for (var i = 0; i < 100; i++) {
  var button = document.createElement('button');
  button.textContent = 'Button ' + (i + 1);
  containerDiv.appendChild(button);
}