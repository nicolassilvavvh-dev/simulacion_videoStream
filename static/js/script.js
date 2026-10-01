console.log("Conexion correcta")

// sirve cambiar la portada del video a otra

const video1 = document.getElementById("video");

if (video1) {
    video1.addEventListener("mouseover", function () {
        // Cambia la portada al pasar el mouse
        video1.poster = "static/images/images(5).png";
    });

    video1.addEventListener("mouseout", function () {
        // Vuelve a la portada original
        video1.poster = "static/video/¿qué_es_una_biblioteca_.mp4";
    });
}

// sirve para añadir un libro al contador

let boton1 = document.querySelector("#cienañosdesoledad");
let contador1 = document.querySelector("#contador1");

boton1.onclick = function () {
    let cantidad = parseInt(contador1.innerText);
    cantidad++;
    contador1.innerText = cantidad + 0;
};

let boton2 = document.querySelector("#sapiens");
let contador2 = document.querySelector("#contador1");

boton2.onclick = function () {
    let cantidad = parseInt(contador2.innerText);
    cantidad++;
    contador2.innerText = cantidad + 0;
};

let boton3 = document.querySelector("#elprincipito");
let contador3 = document.querySelector("#contador1");

boton3.onclick = function () {
    let cantidad = parseInt(contador3.innerText);
    cantidad++;
    contador3.innerText = cantidad + 0;
};

// cuando coloque un correo mandara un mensaje diciendo bienvenido

const btnLogin = document.getElementById('btnLogin');
const inputEmail = document.getElementById('inputEmail');

btnLogin.addEventListener('click', function() {
    const texto = inputEmail.value.trim();
    if (texto !== '') {
        alert(`Bienvenido\n${texto}`);
    } else {
        alert('Por favor ingresa tu correo.');
    }
});