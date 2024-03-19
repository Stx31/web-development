document.getElementById('yourFormId').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve quantity and product values
    var quantity = document.getElementById('quantityInput').value;
    var product = document.getElementById('productInput').value;
  
    // Create a new li element
    var li = document.createElement('li');
  
    // Set text on the new li element
    li.textContent = quantity + ' ' + product;
  
    // Append the new li to the ul element
    document.getElementById('yourUlId').appendChild(li);
  
    // Reset the inputs
    document.getElementById('quantityInput').value = '';
    document.getElementById('productInput').value = '';
  });