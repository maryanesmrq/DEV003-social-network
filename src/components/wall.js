import { async } from 'regenerator-runtime';
import {
  postPublication, consultaTiempoReal, deletePost, editPost,
} from '../lib/functionFirebase.js';
// import { auth } from '../lib/firebase.js';

export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  const cuadroBlancoWall = document.createElement('div');
  const logo = document.createElement('img');
  const logOut = document.createElement('button');
  // const profilePic = document.createElement('img');
  const newPost = document.createElement('input');
  const postPublicationBoton = document.createElement('button');
  // const userId = currentUserInfo().uid;
  const postMade = document.createElement('div'); // publicacion realizada
  const contenedorPublicacion = document.createElement('div');

  contenedorPublicacion.classList = 'contenedorPublicacion';
  postMade.classList = 'postMade';
  postPublicationBoton.textContent = 'Publicar';
  postPublicationBoton.classList = 'postPublicationBoton';
  cuadroBlancoWall.classList = 'cuadroBlancoWall';
  wallDiv.classList = 'wallDiv';
  logo.classList = 'logoWall';
  logOut.classList = 'logOut';
  newPost.classList = 'newPost';
  newPost.id = 'newPost';
  logo.src = './logoUnidas.png';
  logOut.textContent = 'Cerrar sesión';
  // profilePic PENDIENTE
  newPost.placeholder = 'Crear publicación';

  // poner listener al boton publicar
  // ejecutar postPublication(autor, contenido) <-- contenido y autor

  // cambiar querySnapshot cambiarla por onSnapshot
  function paintData(doc) {
    const data = doc.data();
    data.id = doc.id;
    const postBox = `
      <div class='contenedor__post'>
        <div class='contenido__post'>
          <h3> ${data.autor} </h3>
          <p> ${data.contenido} </p>
        </div>
        <div class='contenedor__btns'>
          <button class='btn-like'>👍🏻 Me gusta</button>
          <button class='btn-edit' data-id='${data.id}','${data.contenido}'>✏️ Editar</button>
          <button class='btn-delete' data-id='${data.id}'>❌ Eliminar</button>
        </div>
      </div>
    `;

    const eachPost = document.createElement('div');
    eachPost.classList = 'eachPost';
    eachPost.innerHTML = postBox;
    postMade.appendChild(eachPost);

    // --------------- Btn Eliminar --------------------------
    const btnsDelete = document.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        await deletePost(e.target.dataset.id);
      });
    });

    // --------------- Btn Editar --------------------------
    const btnsEdit = document.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        newPost.value = data.contenido;
        const post = await editPost(e.target.dataset.id, newPost.value);
        postPublicationBoton.innerHTML = 'Editar';
        const data2 = post.data();

        contenedorPublicacion['data-contenido'].value = data2.contenido;
      });
    });
  }

  consultaTiempoReal((querySnapshot) => {
    postMade.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const datos = doc;
      paintData(datos);
    });
  });

  postPublicationBoton.addEventListener('click', () => {
    postPublication(newPost.value);
  });
  // resultado es que aparezca el post en pantalla
  // });
  // console.log(currentUserInfo());
  logOut.addEventListener('click', () => {
    onNavigate('/');
  });
  // like pendiente
  // editPost pendiente
  // deletePost pendiente

  wallDiv.appendChild(logo);
  wallDiv.appendChild(logOut);
  wallDiv.appendChild(cuadroBlancoWall);
  cuadroBlancoWall.appendChild(contenedorPublicacion);
  contenedorPublicacion.appendChild(newPost);
  contenedorPublicacion.appendChild(postPublicationBoton);
  cuadroBlancoWall.appendChild(postMade);

  return wallDiv;
};
