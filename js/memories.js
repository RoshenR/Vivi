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


const memories = {
    vacances: {
        images: ['images/in-love-La-Rochelle.jpg', 'images/together-aquarium-1.jpg', 'images/together-aquarium-2.jpg', 'images/together-aquarium-3.jpg'],
        text: "À La Rochelle, parmi les reflets bleutés et les murmures marins,\n" +
            "j’ai découvert un autre monde.\n" +
            "Les méduses dansaient lentement derrière la vitre, captivantes… presque autant que ton regard émerveillé.\n" +
            "Mais le plus beau spectacle ce jour-là… c’était ton sourire devant elles."
    },
    biscarrosse: {
        images: ['images/bisca-pic.jpg', 'images/bisca-hands.jpg'],
        text: "À Biscarrosse, entre le sable chaud et le vent salé,\n" +
            "je me sentais léger, presque à ma place.\n" +
            "Il y avait ton rire porté par les vagues,\n" +
            "et tes yeux tournés vers l’horizon, pleins de vie.\n" +
            "\n" +
            "Ce jour-là, tu m’as tendu un bracelet,\n" +
            "pas juste un objet…\n" +
            "mais un choix fait avec le cœur.\n" +
            "Depuis, je le garde comme un rappel doux et discret\n" +
            "de ce moment, de toi,\n" +
            "et de tout ce que j’aurais voulu préserver."
    },
    // rencontre: {
    //     images: ['images/rencontre1.jpg'],
    //     text: "Notre première rencontre, le début d'une belle histoire."
    // }
};

function showMemory(theme) {
    const imagesDiv = document.getElementById('memory-images');
    const textDiv = document.getElementById('memory-text');

    imagesDiv.innerHTML = '';
    memories[theme].images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        imagesDiv.appendChild(img);
    });

    textDiv.textContent = memories[theme].text;
}
