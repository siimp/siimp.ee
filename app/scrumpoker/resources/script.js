// dynamically add css
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/resources/style.css');
document.head.appendChild(link);

const body = document.getElementsByTagName('body')[0];

function toggleAndreasMode(isInAndreasMode) {		
	if (isInAndreasMode) {
		CONTEXT.game.state = GameState.STARTED;
	} else {
		gameCanvas.width = document.body.clientWidth;
		gameCanvas.height = document.body.clientHeight;
		CONTEXT.game = new Game(gameCanvas.width, gameCanvas.height);
	}
	document.getElementById('cursor-gun').style.display = isInAndreasMode ? 'block' : 'none';
	document.getElementById('gameCanvas').style.display = isInAndreasMode ? 'block' : 'none';
	body.style.cursor = isInAndreasMode ? 'none' : 'auto';
    body.style['user-select'] = isInAndreasMode ? 'none' : 'auto';
}
