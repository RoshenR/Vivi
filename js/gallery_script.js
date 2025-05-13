// Sélection de la modale, du contenu et du bouton de fermeture
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Fonction pour ouvrir la modale
function openModal(mediaElement, captionText) {
    // Supprimer le contenu précédent de la modale
    modalContent.innerHTML = '';

    // Cloner l'élément média (image ou vidéo)
    const clone = mediaElement.cloneNode(true);

    // Si c'est une vidéo, ajouter directement les contrôles
    if (clone.tagName === 'VIDEO') {
        clone.setAttribute('controls', 'true'); // Active les contrôles vidéo
        clone.style.pointerEvents = 'auto'; // Autorise les interactions sur la vidéo
    }

    // Ajout du média cloné à la modale
    modalContent.appendChild(clone);

    // Ajout d'une légende si disponible
    if (captionText) {
        const caption = document.createElement('p');
        caption.className = 'modal-caption';
        caption.textContent = captionText;
        modalContent.appendChild(caption);
    }

    // Activer la modale
    modal.classList.add('active');
}

// Ajouter un événement sur chaque élément de la galerie
galleryItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const mediaElement = item.querySelector('img, video'); // Sélectionne l'image ou la vidéo
        const captionText = item.getAttribute('data-caption'); // Légende optionnelle
        openModal(mediaElement, captionText); // Ouvre la modale avec le contenu
    });
});

// Fermer la modale lorsqu'on clique sur le bouton de fermeture
modalClose.addEventListener('click', () => {
    modal.classList.remove('active'); // Désactiver la modale
    modalContent.innerHTML = ''; // Réinitialiser le contenu
});

// Empêche la fermeture en cliquant sur le contenu (comme la vidéo)
modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Fermer la modale si on clique en dehors du contenu
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalContent.innerHTML = '';
    }
});