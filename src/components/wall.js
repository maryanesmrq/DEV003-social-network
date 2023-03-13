import {
  postPublication, consultaTiempoReal, deletePost, editPost, obtenerDatos,
} from '../lib/functionFirebase.js';
// import { auth } from '../lib/firebase.js';

export const wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  wallDiv.classList = 'wallDiv';

  const cuadroBlancoWall = document.createElement('div');
  cuadroBlancoWall.classList = 'cuadroBlancoWall';

  const logo = document.createElement('img');
  logo.classList = 'logoWall';
  logo.src = './logoUnidas.png';

  const logOut = document.createElement('button');
  logOut.classList = 'logOut';
  logOut.textContent = 'Cerrar sesión';

  const newPost = document.createElement('input');
  newPost.classList = 'newPost';
  newPost.id = 'newPost';
  newPost.placeholder = 'Crear publicación';

  const postPublicationBoton = document.createElement('button');
  postPublicationBoton.textContent = 'Publicar';
  postPublicationBoton.classList = 'postPublicationBoton';

  const postMade = document.createElement('div'); // publicacion realizada
  postMade.classList = 'postMade';

  const contenedorPublicacion = document.createElement('div');
  contenedorPublicacion.classList = 'contenedorPublicacion';

  let editStatus = false;
  let id = '';

  // profilePic PENDIENTE
  // poner listener al boton publicar
  // ejecutar postPublication(autor, contenido) <-- contenido y autor

  // cambiar querySnapshot cambiarla por onSnapshot
  function paintData(doc) {
    const data = doc.data();
    data.id = doc.id;
    const postBox = `
      <div class='contenedor__post'>
        <div class='contenido__post'>
          <p class='contenido_publicacion'> ${data.contenido} </p>
        </div>
        <div class='contenedor__btns'>
          <button class='btn-like'>👍🏻 Me gusta</button>
          <button class='btn-edit' data-id='${data.contenido}'>✏️ Editar</button>
          <button class='btn-delete' value='${data.id}' data-id='${data.id}'>❌ Eliminar</button>
        </div>
      </div>
    `;

    const eachPost = document.createElement('div');
    eachPost.classList = 'eachPost';
    eachPost.innerHTML = postBox;
    postMade.appendChild(eachPost);

    // --------------- Btn Eliminar --------------------------
    const btnsDelete = document.querySelectorAll(`[data-id='${data.id}']`);
    btnsDelete.forEach((btn) => {
      // console.log(e.target);
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // await deletePost(e.target.dataset.id);

        // pregunta o alerta antes de eliminar
        // eslint-disable-next-line no-restricted-globals
        const eliminar = confirm('¿Estás seguro que quieres eliminar esta publicación?');
        // si opta por el boton "eliminar" se ejecuta deletePost()
        if (eliminar) {
          deletePost(dataset.id);
        } else {
          onNavigate('/wall');
        }

        // await deletePost(e.target.dataset.id);

        // si da clic en el boton "cancelar" lo devuelve a la pantalla con publicaciones
      });
    });

    // --------------- Btn Editar --------------------------
    // se reconocen todos los botones editar como const btnsEdit
    const btnsEdit = document.querySelectorAll(`[data-id='${data.contenido}']`);
    // se recorren con el .forEach a dichos botones
    btnsEdit.forEach((btn) => {
      // Al dar clic en el boton se leera lo siguiente
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // El texto del boton "Publicar" cambiara a "Editar"
        postPublicationBoton.innerText = 'Editar';
        // Igualamos el contenido de newPost al que tiene la publicación
        newPost.value = data.contenido;
        //
        const post = obtenerDatos(dataset.id);
        // console.log(dataset.id);
        const data2 = post.data();
        console.log(post.data());
        // console.log(e.target.dataset.id);

        editStatus = true;
        id = post.id;

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

  postPublicationBoton.addEventListener('click', async (e) => {
    if (newPost.value.length > 0) {
      postPublication(newPost.value);
    }
    if (!editStatus) {
      obtenerDatos(e.target.dataset.id);
    } else {
      editPost(id, newPost.value);
    }

    editStatus = false;
    id = '';
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
