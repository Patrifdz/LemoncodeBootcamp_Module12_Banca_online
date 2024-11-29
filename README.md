# Módulo 12 - Caso Práctico Banca Online - Laboratorio

En este módulo trabajaremos con una aplicación más completa. Vamos a simular un portal de banca online, donde mostraremos un listado de movimientos de cuenta, así como un formulario de transferencia bancaria.

## Aplicación

Esta aplicación consta de varias páginas que vamos a ir implementando poco a poco.

### Login

Aquí tendremos la página principal de acceso a nuestra aplicación o página de login.  
En esta página implementaremos:

- Recoger los valores del formulario.  
- Añadir validaciones a los campos.  
- Mandar la información al servidor mediante un método de la API.  
- Según si el login es válido, mostraremos un mensaje de error (si ha fallado) o navegaremos a la siguiente página (listado de cuentas).

---

### Listado de Cuentas

Página con las cuentas disponibles del usuario logado.  
En esta página implementaremos:

- Recuperar las cuentas disponibles del servidor.  
- Navegar a la página de transferencias o movimientos de una cuenta seleccionada.  
- Navegar a creación de nueva cuenta.

---

### Cuenta

Página para crear o editar cuenta.  
En esta página implementaremos:

- Recoger los valores del formulario.  
- Añadir validaciones a los campos.  
- Mandar la información al servidor mediante un método de la API.  
- Recoger parámetros de la URL para ver si es modo crear o editar.

---

### Movimientos

Página para consultar los movimientos de una cuenta.  
En esta página implementaremos:

- Recoger parámetros de la URL para ver el ID de cuenta.  
- Recuperar los movimientos disponibles de esa cuenta.

---

### Transferencia

Página para enviar una transferencia.  
En esta página implementaremos:

- Recoger parámetros de la URL para ver el ID de cuenta.  
- Recoger los valores del formulario.  
- Añadir validaciones a los campos.  
- Mandar la información al servidor mediante un método de la API.
