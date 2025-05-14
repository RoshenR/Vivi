document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.poem-title');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});

// Enlever l'écran de chargement avec un délai minimum contrôlé
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const minimumLoadingTime = 2000;
    const pageLoadTime = Date.now();

    const hideLoadingScreen = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - pageLoadTime;

        if (elapsedTime >= minimumLoadingTime) {
            loadingScreen.style.opacity = 0;
            loadingScreen.style.transition = "opacity 1s ease";

            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 1000);
        } else {
            setTimeout(hideLoadingScreen, minimumLoadingTime - elapsedTime);
        }
    };

    hideLoadingScreen();
});
