// utils.js

/**
 * Function to create a new player object
 * @param {string} id - The player's unique ID
 * @returns {Object} - The new player object
 */
function createPlayer(id) {
    return {
        id: id,
        x: 0,
        y: 0,
        color: getRandomColor()
    };
}

/**
 * Function to generate a random color
 * @returns {string} - Random color in hexadecimal format
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Function to reset a player's position
 * @param {Object} player - The player object
 */
function resetPlayerPosition(player) {
    player.x = 0;
    player.y = 0;
}

module.exports = {
    createPlayer,
    getRandomColor,
    resetPlayerPosition
};
