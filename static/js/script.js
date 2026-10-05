document.addEventListener('DOMContentLoaded', () => {
    // 1. Contador de Likes
    const btnLike = document.getElementById('btn-like');
    const likeCountSpan = document.getElementById('like-count');
    let liked = false;
    let likes = parseInt(likeCountSpan.textContent, 10);

    btnLike.addEventListener('click', () => {
        if (!liked) {
            likes += 1;
            liked = true;
            btnLike.style.fontWeight = 'bold';
        } else {
            likes -= 1;
            liked = false;
            btnLike.style.fontWeight = 'normal';
        }
        likeCountSpan.textContent = likes;
    });

    // 2. Botón Suscribirse / Suscrito
    const btnSuscribirse = document.getElementById('btn-suscribirse');
    const subCountSpan = document.getElementById('sub-count');
    let suscrito = false;

    btnSuscribirse.addEventListener('click', () => {
        suscrito = !suscrito;
        if (suscrito) {
            btnSuscribirse.textContent = 'Suscrito';
            btnSuscribirse.classList.add('suscrito');
            subCountSpan.textContent = '1.200.001';
        } else {
            btnSuscribirse.textContent = 'Suscribirse';
            btnSuscribirse.classList.remove('suscrito');
            subCountSpan.textContent = '1.2 M';
        }
    });

    // 3. Añadir videos a la cola
    const contenedorCola = document.getElementById('contenedor-cola');
    const toast = document.getElementById('alerta-toast');

    document.querySelectorAll('.btn-agregar').forEach(boton => {
        boton.addEventListener('click', (e) => {
            const tarjeta = e.target.closest('.tarjeta-recomendado, .tarjeta-masVideos');
            if (!tarjeta) return;

            const titulo = tarjeta.querySelector('.nombre-libro').textContent;
            const autor = tarjeta.querySelector('.autor-libro').textContent;
            const visitas = tarjeta.querySelector('.visitas').textContent;
            const imgSrc = tarjeta.querySelector('.imagen-libro').src;

            // Crear elemento en la cola
            const nuevaTarjeta = document.createElement('div');
            nuevaTarjeta.className = 'tarjeta-recomendado';
            nuevaTarjeta.innerHTML = `
                <div class="contenedor-miniatura">
                    <img src="${imgSrc}" alt="${titulo}" class="imagen-libro">
                </div>
                <div class="info-libro">
                    <p class="nombre-libro">${titulo}</p>
                    <p class="autor-libro">${autor}</p>
                    <p class="visitas">${visitas}</p>
                </div>
                <button class="btn-quitar-cola">×</button>
            `;

            contenedorCola.appendChild(nuevaTarjeta);
            mostrarToast('Video añadido a la cola');
        });
    });

    // Delegación para eliminar individualmente de la cola
    contenedorCola.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-quitar-cola')) {
            e.target.closest('.tarjeta-recomendado').remove();
        }
    });

    // 4. Limpiar toda la cola
    const btnLimpiarCola = document.getElementById('btn-limpiar-cola');
    btnLimpiarCola.addEventListener('click', () => {
        contenedorCola.innerHTML = '';
        mostrarToast('Cola de reproducción vaciada');
    });

    // Función auxiliar para mostrar notificaciones (Toast)
    function mostrarToast(mensaje) {
        toast.textContent = mensaje;
        toast.classList.remove('oculto');
        setTimeout(() => {
            toast.classList.add('oculto');
        }, 2500);
    }

    // 5. Reproducción al pasar el cursor por miniaturas (Efecto Hover Preview)
    const miniaturas = document.querySelectorAll('.contenedor-miniatura');
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('mouseenter', () => {
            miniatura.style.transform = 'scale(1.03)';
            miniatura.style.transition = 'transform 0.2s ease';
        });
        miniatura.addEventListener('mouseleave', () => {
            miniatura.style.transform = 'scale(1)';
        });
    });
});