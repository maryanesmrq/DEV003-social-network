import { async } from 'regenerator-runtime';
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

  const logoMobile = document.createElement('img');
  logoMobile.classList = 'logoWallMobile';
  logoMobile.src = './logoUnidasWallMobile.png';

  const logOut = document.createElement('button');
  logOut.classList = 'logOut';
  logOut.textContent = 'Cerrar sesión';

  const logOutMobile = document.createElement('button');
  logOutMobile.classList = 'logOutMobile';
  logOutMobile.textContent = 'Cerrar sesión';

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

  const formulario = document.createElement('form');
  formulario.id = 'formulario';
  formulario.classList = 'formulario';

  // profilePic PENDIENTE
  // poner listener al boton publicar
  // ejecutar postPublication(autor, contenido) <-- contenido y autor

  // cambiar querySnapshot cambiarla por onSnapshot

  // --------------- Btn Eliminar --------------------------

  // se recorren con el .forEach a dichos botones
  // btnsEdit.forEach((btn) => {
  // Al dar clic en el boton se leera lo siguiente
  // btn.addEventListener('click', () => {
  // Igualamos el contenido de newPost al que tiene la publicación
  // newPost.value = data.id;
  // El texto del boton "Publicar" cambiara a "Editar"
  // postPublicationBoton.innerText = 'Guardar';
  // Al dar clic en 'Editar' se reemplace el nuevo texto en la publicación
  // postPublicationBoton.addEventListener('click', ({ target: { dataset } }) => {
  // editPost(dataset.id, newPost.value);
  // });

  // -------------- CODIGO ANTIGUO - SE GUARDARA MOMENTANEAMENTE -----------------------
  // Se realiza una constante que iguale a la obtención de datos
  // la función esta trayendo un documento con mucha info dentro
  // const post = obtenerDatos(dataset.id);
  // Para convertir el documento a datos debo aplicar .data() a la const anterior
  // const data2 = post.data();
  // console.log(post.data());
  // console.log(e.target.dataset.id);
  // });
  // });
  let editStatus = false;
  let id = '';

  consultaTiempoReal((querySnapshot) => {
    postMade.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      const postBox = `
          <div class='contenedor__post'>
            <div class='contenido__post'>
              <p class='contenido_publicacion'> ${data.contenido} </p>
            </div>
            <div class='contenedor__btns'>
              <button class='btn-like'>👍🏻 Me gusta</button>
              <button class='btn-edit' data-id='${doc.id}'>✏️ Editar</button>
              <button class='btn-delete' value='${data.id}' data-id='${data.id}'>❌ Eliminar</button>
            </div>
          </div>
        `;
      const eachPost = document.createElement('div');
      eachPost.classList = 'eachPost';
      eachPost.innerHTML = postBox;
      postMade.appendChild(eachPost);
    });

    // ------------- Btn Eliminar ------------------
    const btnsDelete = document.querySelectorAll('.btn-delete');
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
    const btnsEdit = document.querySelectorAll('.btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const post = await obtenerDatos(e.target.dataset.id);
        // console.log(post);
        const data2 = post.data();
        console.log(data2);

        formulario.newPost.value = data2.contenido;
        // console.log(post.contenido);
        // console.log(data2.contenido);

        editStatus = true;
        id = post.id;
        // postPublicationBoton.innerText = 'Guardar';
        // console.log(postPublicationBoton);
      });
    });
    formulario.addEventListener('submit', async (e) => {
      e.preventDefault();
      const taskDescription = newPost.value;
      if (taskDescription !== '') {
        if (!editStatus) {
          postPublication(taskDescription);
        } else {
          editPost(id, {
            contenido: taskDescription,
          });
          editStatus = false;
        }
        formulario.reset();
      }
    });
  });

  // postPublicationBoton.addEventListener('click', async () => {
  //   if (newPost.value.length > 0) {
  //     postPublication(newPost.value);
  //   }
  // const contenido = newPost.value
  // if(!editStatus){

  // }
  // });
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
  cuadroBlancoWall.appendChild(logoMobile);
  cuadroBlancoWall.appendChild(logOutMobile);
  cuadroBlancoWall.appendChild(contenedorPublicacion);
  formulario.append(newPost, postPublicationBoton, postMade);
  contenedorPublicacion.appendChild(formulario);

  return wallDiv;
};
