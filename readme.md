0. Debemos asegurarnos de tener Node.js y npm instalados en nuestro equipo.
    Seguir paso a paso: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

1. Debemos crear el directorio donde instalaremos las herramientas necesarias para ejecutar de manera local un servidor con node, express y mongo db.
    - Creamos una carpeta nueva ya sea con la opción newfolder de vsc o en la terminal con el comando mkdir "nombre del directorio"

    - una vez dentro de la carpeta, ya sea haciendole click en vsc o en el terminal con el comando cd /"nombre de la carpeta" escribimos en la terminal npm init -y

2. Instalamos las dependencias necesarias:
    npm install express mongoose body-parser

3. Configuramos la conexión a MongoDB
    - Creamos un archivo config.js para manejar la configuración de MongoDB.

4. Definimos el modelo de datos
 - Para más orden recomiendo crear un carpeta llamada modelo y dentro creamos un archivo con el nombre person.js que es donde definiremos el modelo de Person y work.

5. Configuramos nuestras rutas y validaciones para las API
 - Para esto recomiendo también crear una carpeta llamada rutas con un js dentro que contenga estas rutas con sus validaciones correspondientes.

6. Finalmente necesitamos configurar Express y conectar con Mongo

    - Para ello creamos un archivo app.js que nos ayudará a configurar y ejecutar el servidor.


7. Finalmente ejecutamos nuestra applicación en el terminal con el comando:
             node app.js


** Para ver en detalle el código ingrese a cada archivo .js ya que el código estará comentado para explicar cada paso y funcionalidad **
