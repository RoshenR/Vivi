// Enlever l'écran de chargement avec un délai minimum contrôlé
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // Durée minimale affichée de l'écran (en millisecondes)
    const minimumLoadingTime = 2000; // Par exemple, 3 secondes

    // Enregistre le moment où l'événement "load" est déclenché
    const pageLoadTime = Date.now();

    // Fonction pour enlever l'écran après un délai contrôlé
    const hideLoadingScreen = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - pageLoadTime;

        // Vérifie si le temps minimum s'est écoulé
        if (elapsedTime >= minimumLoadingTime) {
            // Applique un effet fade-out pour la fluidité
            loadingScreen.style.opacity = 0;
            loadingScreen.style.transition = "opacity 1s ease";

            // Supprime complètement l'élément après le fade-out
            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 1000); // 1 seconde pour la transition
        } else {
            // Si le temps minimum n'est pas écoulé, ajuste le délai restant
            setTimeout(hideLoadingScreen, minimumLoadingTime - elapsedTime);
        }
    };

    // Appelle la fonction pour vérifier et cacher l'écran
    hideLoadingScreen();
});

// Citations dynamiques
const quotes = [
    "L'amour ne se mesure pas, il se vit chaque jour.",
    "Avec toi, chaque moment est magique.",
    "Je t’aime plus que les mots ne pourront jamais le dire.",
    "Tu es ma lumière dans l’obscurité.",
    "Chaque jour passé avec toi est une bénédiction."
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("inspiring-quote");

// Fonction pour changer la citation avec une animation
function changeQuote() {
    // Ajouter une classe pour l'animation
    quoteElement.classList.remove("fade-in-animation");
    void quoteElement.offsetWidth; // Forcer le reflow pour relancer l'animation
    quoteElement.classList.add("fade-in-animation");

    // Changer la citation
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
}

// Déclencher le changement de citation toutes les 5 secondes
setInterval(changeQuote, 5000);

// Pour afficher la première citation immédiatement
quoteElement.textContent = quotes[currentQuoteIndex];
quoteElement.classList.add("fade-in-animation");


// Ajouter une animation fade-in sur les éléments au chargement
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(element => {
        element.classList.add("fade-in");
    });
});