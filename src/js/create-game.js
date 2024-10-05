// Function to handle the game creation form submission
async function handleCreateGame(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const gameName = document.getElementById('game-name').value;
    const gameDescription = document.getElementById('game-description').value;

    try {
        const response = await fetch('/api/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: gameName, description: gameDescription }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newGame = await response.json();
        console.log('New game created:', newGame); // Log the newly created game
        // Optionally redirect to the game page or clear the form
        alert(`Game "${newGame.name}" created successfully!`);
        document.getElementById('create-game-form').reset(); // Reset the form
    } catch (error) {
        console.error('Error creating game:', error);
        alert('Failed to create game. Please try again.');
    }
}

// Attach the event listener to the form
document.getElementById('create-game-form').addEventListener('submit', handleCreateGame);
