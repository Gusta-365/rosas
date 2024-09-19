document.getElementById('surpriseButton').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

// Asegúrate de que el modal esté oculto al cargar la página
window.onload = function () {
    document.getElementById('modal').style.display = 'none';
};
