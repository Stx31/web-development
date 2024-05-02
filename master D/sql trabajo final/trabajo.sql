USE alquiler_vehiculos;

CREATE TABLE Clientes (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    apellidos VARCHAR(100),
    dni VARCHAR(20),
    telefono VARCHAR(20),
    sexo VARCHAR(1),
    fecha_nac DATE,
    pais_nac VARCHAR(100)
);

CREATE TABLE Vehiculos (
    id INT PRIMARY KEY,
    numero_matricula VARCHAR(20),
    categoria_id INT,
    modelo_id INT,
    año_fabricacion INT,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id),
    FOREIGN KEY (modelo_id) REFERENCES Modelos(id)
);

CREATE TABLE Categorias (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Modelos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    marca_id INT,
    FOREIGN KEY (marca_id) REFERENCES Marcas(id)
);

CREATE TABLE Marcas (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE Reservas (
    id INT PRIMARY KEY,
    trayecto TEXT,
    fecha_alquiler DATE,
    hora_inicio TIME,
    hora_fin TIME,
    vehiculo_id INT,
    cliente_id INT,
    FOREIGN KEY (vehiculo_id) REFERENCES Vehiculos(id),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);
