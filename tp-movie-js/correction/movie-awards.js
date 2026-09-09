// 1. Données initiales (si pas de sauvegarde trouvée)
const defaultMovies = [
    { id: 1, title: "Inception", votes: 0 },
    { id: 2, title: "The Dark Knight", votes: 0 },
    { id: 3, title: "Interstellar", votes: 0 },
    { id: 4, title: "Pulp Fiction", votes: 0 },
    { id: 5, title: "Parasite", votes: 0 },
    { id: 6, title: "Gladiator", votes: 0 }
];

// 2. État de l'application (Le "Source of Truth")
// On essaie de charger les données du localStorage, sinon on utilise les données par défaut
let movies = JSON.parse(localStorage.getItem('movie_votes')) || defaultMovies;

const movieGrid = document.getElementById('movieGrid');

// 3. Fonction de rendu
function renderMovies() {
    // 1. On vide le conteneur proprement
    movieGrid.innerHTML = "";

    movies.forEach(movie => {
        // --- CRÉATION DE LA CARTE (CARD) ---
        const card = document.createElement('div');
        card.className = "card bg-base-100 shadow-xl";

        // --- CRÉATION DU CORPS (CARD BODY) ---
        const cardBody = document.createElement('div');
        cardBody.className = "card-body items-center text-center";

        // --- CRÉATION DU TITRE (H2) ---
        const title = document.createElement('h2');
        title.className = "card-title text-xl";
        title.textContent = movie.title;

        // --- CRÉATION DU CONTENEUR DE VOTE (DIV) ---
        const voteContainer = document.createElement('div');
        voteContainer.className = "flex items-center gap-4 my-4";

        // Nombre de votes (Span)
        const voteCount = document.createElement('span');
        voteCount.className = "text-3xl font-bold text-secondary";
        voteCount.textContent = movie.votes;

        // Label "votes" (Span)
        const voteLabel = document.createElement('span');
        voteLabel.className = "text-sm text-base-content/50";
        voteLabel.textContent = "votes";

        // --- CRÉATION DE LA ZONE D'ACTION (CARD ACTIONS) ---
        const cardActions = document.createElement('div');
        cardActions.className = "card-actions";

        // Bouton de vote
        const voteBtn = document.createElement('button');
        voteBtn.className = "btn btn-primary btn-lg";
        voteBtn.innerText = "👍 Vote"; // On peut garder innerHTML ici pour l'émoji facilement
        
        // Utilisation d'une fonction fléchée pour l'événement (plus propre que l'attribut onclick)
        voteBtn.addEventListener('click', () => vote(movie.id));

        // --- ASSEMBLAGE (L'ordre est crucial !) ---
        // 
        
        // On met les éléments dans le body
        cardBody.appendChild(title);
        cardBody.appendChild(voteContainer);
        cardBody.appendChild(cardActions);

        // On met les éléments dans le conteneur de vote
        voteContainer.appendChild(voteCount);
        voteContainer.appendChild(voteLabel);

        // On met le bouton dans la zone d'action
        cardActions.appendChild(voteBtn);

        // On met le body dans la carte
        card.appendChild(cardBody);

        // On ajoute enfin la carte dans la grille
        movieGrid.appendChild(card);
    });
}


// 4. Fonction pour gérer le vote
function vote(movieId) {
    // On cherche le film dans notre tableau d'objets
    const movie = movies.find(oneMovie => oneMovie.id === movieId);
    if (movie) {
        movie.votes++; // On modifie l'état (le tableau)
        saveAndRefresh(); // On sauvegarde et on rafraîchit l'UI
    }
}

// 5. Sauvegarde et mise à jour de l'interface
function saveAndRefresh() {
    // Sauvegarde dans le localStorage (il faut transformer l'objet en string avec JSON.stringify)
    localStorage.setItem('movie_votes', JSON.stringify(movies));
    // On re-rend les composants pour refléter le nouvel état
    renderMovies();
}

// Initialisation au lancement
renderMovies();
