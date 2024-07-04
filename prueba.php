<?php
$servidor = "localhost";
$usuario = "root";
$password = "admin";
$base_datos = "prueba";


$conn = new mysqli($servidor, $usuario, $password, $base_datos);

if ($conn->connect_error) {
    die("Conexión fallida - ERROR de conexión: " . $conn->connect_error);
}
echo "Conexión OK";
?>