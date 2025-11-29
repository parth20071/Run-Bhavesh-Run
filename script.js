const coinSound = document.getElementById('coinSound');

function handleCoin(coin) {coin_collect.wav}
    gameState.score += coin.value;
    createParticles(coin.x + coin.width/2, coin.y + coin.height/2, '#FFD700', 15);

    // 🔊 Play the sound effect
    if (coinSound) {
        coinSound.currentTime = 0; // Rewind the sound to the start
        coinSound.play();
    }
}
