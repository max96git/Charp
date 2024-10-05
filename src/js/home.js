// Function to fetch games from the API and display them on the home page
async function fetchFeaturedGames() {
    try {
        const response = await fetch('/api/games'); // Fetching from the Express API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const games = await response.json(); // Store the fetched games

        displayFeaturedGames(games); // Call the function to display the games
    } catch (error) {
        console.error('Error fetching featured games:', error);
    }
}

// Function to display the fetched games on the home page
function displayFeaturedGames(games) {
    const featuredGamesList = document.getElementById('featured-games');
    featuredGamesList.innerHTML = ''; // Clear existing content

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';

        const gameName = document.createElement('h3');
        gameName.innerText = game.name;

        const gameDescription = document.createElement('p');
        gameDescription.innerText = game.description;

        gameCard.appendChild(gameName);
        gameCard.appendChild(gameDescription);
        gameCard.addEventListener('click', () => {
            // Redirect to game-play page with the game ID
            window.location.href = `/game-play?id=${game.id}`;
        });

        featuredGamesList.appendChild(gameCard);
    });
}

// Call fetchFeaturedGames on page load
document.addEventListener('DOMContentLoaded', fetchFeaturedGames);
