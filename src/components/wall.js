import {
  postPublication, consultaTiempoReal, deletePost, editPost, obtenerDatos,
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

  let editStatus = false;
  let id = '';

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
    const btnsEdit = document.querySelectorAll(`[data-id='${data.contenido}']`);
    console.log(btnsEdit);
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        // const mostrarDatos = await obtenerDatos(e.target.dataset.id);
        // console.log(mostrarDatos);
        postPublicationBoton.innerText = 'Editar';
        newPost.value = data.contenido;
        const post = obtenerDatos(dataset.id);
        // console.log(dataset.id);
        const data2 = post.data();
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
      editPost(id, {
        contenido: newPost.value,
      });
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
