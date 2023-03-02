import { postPublication } from '../lib/functionFirebase.js';

export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const cuadroBlancoWall = document.createElement('div');
  const logo = document.createElement('img');
  const logOut = document.createElement('button');
  // const profilePic = document.createElement('img');
  const newPost = document.createElement('input');
  const like = document.createElement('button');
  const editPost = document.createElement('button');
  const deletePost = document.createElement('button');
  const postPublicationBoton = document.createElement('button');

  postPublicationBoton.textContent = 'Publicar';
  cuadroBlancoWall.classList = 'cuadroBlancoWall';
  wallDiv.classList = 'wallDiv';
  logo.classList = 'logoWall';
  logOut.classList = 'logOut';
  newPost.classList = 'newPost';
  logo.src = './logoUnidas.png';
  logOut.textContent = 'Cerrar sesión';
  // profilePic PENDIENTE
  newPost.placeholder = 'Crear publicación';
  like.textContent = '👍';
  editPost.textContent = '✏️';
  deletePost.textContent = '❌';

  // poner listener al boton publicar
  // ejecutar postPublication(autor, contenido) <-- contenido y autor

  postPublicationBoton.addEventListener('click', () => {
    postPublication(newPost.value).then(() => {
      // resultado es que aparezca el post en pantalla
    });
  });

  logOut.addEventListener('click', () => {
    onNavigate('/');
  });
  // like pendiente
  // editPost pendiente
  // deletePost pendiente

  wallDiv.appendChild(logo);
  wallDiv.appendChild(logOut);
  wallDiv.appendChild(cuadroBlancoWall);
  // wallDiv.appendChild(profilePic);
  cuadroBlancoWall.appendChild(newPost);
  cuadroBlancoWall.appendChild(postPublicationBoton);
  cuadroBlancoWall.appendChild(like);
  cuadroBlancoWall.appendChild(editPost);
  cuadroBlancoWall.appendChild(deletePost);

  return wallDiv;
};
