const gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = document.body.clientWidth;
gameCanvas.height = document.body.clientHeight;
gameCanvas.style.display = 'none';

// main context
const CONTEXT = {
    canvas: gameCanvas,
    ctx: gameCanvas.getContext("2d"),
    assetsLoaded: /*promise*/ null,
    game: new Game(gameCanvas.width, gameCanvas.height)
}