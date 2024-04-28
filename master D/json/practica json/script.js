document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
  
    var formData = {
      name: name,
      email: email,
      message: message
    };
  
    var jsonData = JSON.stringify(formData);
  

    console.log(jsonData);
  
   
  });
  