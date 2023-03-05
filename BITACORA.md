En este desafío técnico, tuve que crear una aplicación utilizando React y otras herramientas para crear una tienda con funcionalidades básicas. Para hacer esto, seguí los siguientes pasos:

Instalé la librería react-router-dom para crear rutas en la aplicación. Esto me permitió crear diferentes vistas para cada página y navegar entre ellas sin tener que recargar la página completa.

Creé una carpeta llamada api donde escribí funciones que llaman a las diferentes URLs necesarias para obtener información del servidor. Estas funciones fueron escritas utilizando fetch.

Creé una carpeta llamada context donde escribí un archivo llamado Context.js. En este archivo, importé las funciones de la carpeta api y las utilicé para obtener información del servidor y guardarlas en un estado. También creé funciones para agregar y eliminar productos del carrito de compras, y todas estas funciones y el estado las expuse en el contexto para que estuvieran disponibles en toda la aplicación.

Creé una carpeta llamada pages, donde guardé todas las vistas principales de la aplicación: home, details y cart. Cada una de estas vistas se componen de diferentes componentes que forman la estructura de la página.

Creé una carpeta llamada components, donde guardé todos los componentes que se utilizan en la aplicación. Cada componente se encuentra en su propia carpeta junto con su archivo CSS.

Creé una carpeta llamada assets, donde guardé todos los archivos multimedia, como imágenes y videos, que se utilizan en la aplicación.

Utilicé el local storage para persistir la información del carrito de compras, de manera que el usuario pueda cerrar la aplicación y volver más tarde sin perder los productos que había agregado al carrito.

Con estos pasos, pude crear una aplicación funcional que permite al usuario agregar productos al carrito de compras, eliminar productos y ver los detalles de cada producto.

Para instalar las librerias y correr el orecto se mantienen los mismo pasos:

Instalar API (backend) y la aplicacion React (front):

En la carpeta root de la aplicacion correr: npm install
Navega al directorio front y vuelve a correr el comando: npm install
Regresa al directorio root cd ...
La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

npm run dev