# Postify App
Esta aplicación fue desarrollada en Next.js 13 y utiliza su nuevo sistema de rutas. La aplicación muestra una lista de publicaciones con información de usuario y comentarios obtenidos de una API.

## Funcionalidades
- Mostrar una lista de publicaciones con título, contenido y nombre de usuario.
- Mostrar una lista de comentarios asociados a cada publicación.
- Utilizar el nuevo componente LoadingUI de Next.js 13 para mostrar una pantalla de carga mientras se obtienen los datos de la API.
- Utilizar el nuevo componente ErrorUI de Next.js 13 para mostrar un mensaje de error en caso de que no se puedan obtener los datos de la API.
- Utilizar el componente React.Suspense para mostrar una pantalla de carga mientras se cargan los componentes de manera asíncrona.

## Instalación
Para instalar la aplicación, siga los siguientes pasos:
```bash
# Clonar el repositorio en su máquina local
git clone https://github.com/username/post-app.git

# Navegar hasta el directorio de la aplicación
cd post-app

# Instalar las dependencias del proyecto
npm install

# Iniciar la aplicación
npm run dev

# Abrir un navegador web y visitar la siguiente URL: http://localhost:3000
```
## Uso
Una vez que la aplicación esté en funcionamiento, se mostrará una lista de publicaciones con información de usuario y comentarios. Si los datos tardan en cargarse, se mostrará una pantalla de carga utilizando el nuevo componente LoadingUI de Next.js 13. Si hay algún error al cargar los datos de la API, se mostrará un mensaje de error utilizando el nuevo componente ErrorUI de Next.js 13.

Para ver los comentarios asociados a una publicación, simplemente haga clic en el botón "Mostrar comentarios" debajo de la publicación correspondiente. Si los comentarios tardan en cargarse, se mostrará una pantalla de carga utilizando el componente React.Suspense.

## Contribuyendo
Si desea contribuir a la aplicación, puede hacerlo de la siguiente manera:
- Crear un nuevo issue describiendo el problema o la funcionalidad que desea agregar.
- Hacer un fork del repositorio y crear una nueva rama con el nombre de la issue.
- Hacer los cambios necesarios y hacer un pull request hacia la rama principal del repositorio.
- Esperar a que se revise el pull request y se haga la fusión en caso de ser aprobado.

## Licencia
Esta aplicación se distribuye bajo la licencia MIT. Consulte el archivo LICENSE para obtener más información.
