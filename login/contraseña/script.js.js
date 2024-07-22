document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const encryptedPassword = CryptoJS.AES.encrypt(password, 'secret-key').toString();

    
    console.log('Nombre de usuario:', username);
    console.log('Contraseña encriptada:', encryptedPassword);

});
