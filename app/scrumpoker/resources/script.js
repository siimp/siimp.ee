// dynamically add css
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/resources/style.css');
document.head.appendChild(link);

const body = document.getElementsByTagName('body')[0];

function toggleAndreasMode(isInAndreasMode) {		
	console.log('toggleAndreasMode', isInAndreasMode)
	if (isInAndreasMode) {
		CONTEXT.game.state = GameState.STARTED;
	} else {
		CONTEXT.game.state = GameState.STOPPED;
	}
	document.getElementById('cursor-gun').style.visibility = isInAndreasMode ? 'inherit' : 'hidden';
	document.getElementById('gameCanvas').style.display = isInAndreasMode ? 'block' : 'none';
	body.style.cursor = isInAndreasMode ? 'none' : 'auto';
    body.style['user-select'] = isInAndreasMode ? 'none' : 'auto';
}
