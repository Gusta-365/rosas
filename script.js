document.addEventListener('DOMContentLoaded', function () {
    const surpriseButton = document.getElementById('surpriseButton');
    const popup = document.getElementById('surprisePopup');
    const closePopup = document.getElementById('closePopup');
    const imageBox = document.querySelector('.image-box');
    const backgrounds = [
        'images/img1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
        'images/img4.jpg',
        'images/img5.jpg'
    ];

    const jokes = [
        "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
        "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!"
    ];

    let currentBackgroundIndex = 0;

    function changeBackground() {
        const newBackground = backgrounds[currentBackgroundIndex];
        const newImage = document.createElement('img');

        newImage.src = newBackground;
        newImage.alt = `Imagen ${currentBackgroundIndex + 1}`;

        const oldImage = imageBox.querySelector('img');
        if (oldImage) {
            oldImage.style.opacity = 0;
            oldImage.style.transform = 'scale(1.05)';

            setTimeout(() => {
                oldImage.remove();
            }, 300); // Remove after fade-out
        }

        newImage.style.opacity = 0;
        newImage.style.transform = 'scale(0.95)';
        imageBox.appendChild(newImage);

        setTimeout(() => {
            newImage.style.opacity = 1;
            newImage.style.transform = 'scale(1)';
        }, 50); // Fade in

        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 1500); // Cambia cada 1.5 segundos

    function showSurpriseMessage() {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        const jokeElement = document.querySelector('.joke');
        jokeElement.textContent = randomJoke;
    }

    surpriseButton.addEventListener('click', function () {
        showSurpriseMessage();
        popup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
