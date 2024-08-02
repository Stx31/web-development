CREATE DATABASE sitio_web;
USE sitio_web;

CREATE TABLE users_data (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(100),
    sexo VARCHAR(10) NOT NULL
);

CREATE TABLE users_login (
    idLogin INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('user', 'admin') NOT NULL,
    FOREIGN KEY (idUser) REFERENCES users_data(idUser) ON DELETE CASCADE
);

CREATE TABLE books (
    idBook INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    anio_publicacion YEAR NOT NULL,
    genero VARCHAR(50),
    estado ENUM('disponible', 'prestado') DEFAULT 'disponible'
);

CREATE TABLE prestamos (
    idPrestamo INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT NOT NULL,
    idBook INT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (idUser) REFERENCES users_data(idUser) ON DELETE CASCADE,
    FOREIGN KEY (idBook) REFERENCES books(idBook) ON DELETE CASCADE
);
