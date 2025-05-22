# ProjectAngular 
El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.14 y [Angular Material](https://v18.material.angular.dev/) version 18. 

# Uso: 
1. Acceder al proyecto /angular-v18-2025 y ejecutar los comandos `$ npm install, $ ng serve` y navegar a la url: `http://localhost:4200/angular-v18-2025`. 
2. Para construir el proyecto usar el comando: `$ ng build --configuration production --base-href="/angular-v18-2025/"` se creara en el directorio: `\dist\angular-v18-2025\browser\` 
3. La App se encuentra desplegada en GitHub Pages: `https://edgareor.github.io/angular-v18-2025` 

# Desarrollos Aplicados: 
1. Barra superior de opciones, estilo Angular Material, con boton dinamico para barra lateral de navegación a distintas zonas de la aplicación, usuario dinamico con tecnología Menú Angular Material que posee la opción de cerrar sesión, cambio de tema claro - oscuro, menu adicional de navegacion y boton "Me Gusta". 
2. La app tiene seguridad basica, cualquier intento de acceder sin autenticarse redirecciona al login. Es necesario autenticarse para poder acceder a la app. Funciona con cualquier email - password. 
3. `/login`: Login de tipo email y password, con validaciones respectivas (formulario reactivo), estilo Angular Material, con MatIcons de sufijo, Ver password u ocultar. Con Google reCaptcha V2. Funcionalidad implementada para habilitar boton "Ingresar" unicamente si pasan las validacion y el recaptcha. Boton "Borrar" para limpiar el formulario. 
4. `/table`: Tabla Angular Material con filtro de busquedas, orden ascedente o descendete de cualquier columna, paginacion y cambio de tamaño de paginación, seleccion (todos e individual), copiar datos de fila, descarga Excel y descarga PDF. 
5. `/registrase`: Modulo informativo y boton de registro que habilita ventana modal Angular Material (Dialog), con sus respectivo formulario reactivo para efectuar la el registro con posterior spinner de 2s y snackbar informativo de exito de 3s. La pagina tiene implementada la funcionalidad de Ripple Angular Material para dar efecto indicativo de click. 
6. `/formulario`: Apartado para mostrar las distintas opciones de un formulario reactivo con Angular Material. 
7. `/cargar`: Muestra la funcionalidad de cargar archivos CSV, organizada en Tabs Angular Material. 
8. `/testing`: Funcionalidad de drag and drop y manejo de codigo QR en Angular, el QR redirecciona a Google, div con estilo elevado o raised.
9. Toda la app tiene seguridad con Guard, es decir, si no te logueas no puedes acceder a los modulos.
