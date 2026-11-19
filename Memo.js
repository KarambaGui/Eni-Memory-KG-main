document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    
    let hasFlippedCard = false;
    let lockBoard = false; // Empêche de cliquer pendant le délai d'une seconde
    let firstCard = null;
    let secondCard = null;
    let score = 0; // <-- 1. Déclaration de la variable score

    // Optionnel : si vous avez un élément dans votre HTML pour afficher le score (ex: <div id="score">0</div>)
    // const scoreDisplay = document.getElementById("score");

    // On écoute le clic sur chaque carte
    cards.forEach(card => {
        card.addEventListener("click", () => {
            // 1. Sécurités : on bloque si le plateau est verrouillé, 
            // si on clique sur la même carte, ou si elle est déjà trouvée
            if (lockBoard) return;
            if (card === firstCard) return;
            if (card.classList.contains("matched")) return;

            // 2. On retourne la carte cliquée
            card.classList.add("flipped");

            if (!hasFlippedCard) {
                // --- PREMIÈRE CARTE CLIQUÉE ---
                hasFlippedCard = true;
                firstCard = card;
            } else {
                // --- DEUXIÈME CARTE CLIQUÉE ---
                secondCard = card;

                // On compare les sources des images des deux cartes
                const img1 = firstCard.querySelector("img").src;
                const img2 = secondCard.querySelector("img").src;

                if (img1 === img2) {
                    // --- CAS A : C'EST UN MATCH ---
                    // On marque les cartes comme trouvées pour ne plus pouvoir cliquer dessus
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");

                    // --- 2. Incrémentation du score ---
                    score += 1; // Ou score++ (ajoute 1 point par paire trouvée)
                    console.log("Score actuel :", score);

                    // Si vous avez un élément HTML pour afficher le score :
                    // if (scoreDisplay) scoreDisplay.textContent = score;

                    // On réinitialise directement les variables pour le tour suivant
                    hasFlippedCard = false;
                    lockBoard = false;
                    firstCard = null;
                    secondCard = null;

                } else {
                    // --- CAS B : CE N'EST PAS UN MATCH ---
                    lockBoard = true; // On bloque le plateau pour empêcher de cliquer partout

                    // On attend 1 seconde (1000 ms) avant de cacher les cartes
                    setTimeout(() => {
                        firstCard.classList.remove("flipped");
                        secondCard.classList.remove("flipped");

                        // On remet tout à zéro pour autoriser de nouveaux clics
                        hasFlippedCard = false;
                        lockBoard = false;
                        firstCard = null;
                        secondCard = null;
                    }, 1000);
                }
            }
        });
    });
});