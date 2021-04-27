// dynamically add css
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'resources/style.css');
document.head.appendChild(link);

const body = document.getElementsByTagName('body')[0];

// dynamically create gun element
const cursorGun = document.createElement('img');
cursorGun.setAttribute('id', 'cursor-gun');
cursorGun.setAttribute('src', 'resources/cursor.png');
cursorGun.setAttribute('style', 'visibility:hidden');
body.prepend(cursorGun);

// dynamically create foreground element
const foreground = document.createElement('div');
foreground.setAttribute('id', 'foreground');
const shotArea = document.createElement('span');
foreground.append(shotArea);
body.append(foreground);



let mousePositionX;
let mousePositionY;
const mouseMoveHandler = function(e) {
	mousePositionX = e.pageX - window.pageXOffset + 'px';
	mousePositionY = e.pageY - window.pageYOffset + 'px';
};

let timeoutId;
const mouseClickHandler = function(e) {
	if (e.target && (e.target.id === 'andreas-mode-switch' 
	|| e.target.previousElementSibling && e.target.previousElementSibling.id === 'andreas-mode-switch')) {
		return;
	}
	
	playAudio('shot');
	
	if (Math.random() < 0.2) {
		setTimeout(function() {
			playAudio('laugh', false);
		}, 1000);
	}
	
	const foreground = document.getElementById('foreground');
	const shotArea = document.querySelector('#foreground span')
	
	shotArea.style.marginLeft = e.pageX - window.pageXOffset - 40 + 'px';
	shotArea.style.marginTop = e.pageY - window.pageYOffset - 40 + 'px';
	
	foreground.style.visibility = 'inherit'
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
	timeoutId = setTimeout(function() {
		foreground.style.visibility = 'hidden'
	}, 100);
}


function toggleAndreasMode(isInAndreasMode) {		
	if(isInAndreasMode) {
		playAudio('intro');
		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('click', mouseClickHandler);
		
		const gunApproximateLocation = document.getElementById('andreas-mode-switch').getBoundingClientRect();
		mousePositionX = gunApproximateLocation.left + 'px';
		mousePositionY = gunApproximateLocation.top + 'px';
	} else {
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('click', mouseClickHandler);
	}
	
	cursorGun.style.visibility = isInAndreasMode ? 'inherit' : 'hidden';
	body.style.cursor = isInAndreasMode ? 'none' : 'auto';
	body.style['user-select'] = isInAndreasMode ? 'none' : 'auto';
}

function playAudio(audioName, resetTime=true) {
	const audio = document.querySelector('audio[src="resources/' + audioName +'.mp3"]');
	if(resetTime) {
		audio.currentTime = 0;
	}
	audio.play();
}

function animate() {
	if (mousePositionX && mousePositionY) {
		cursorGun.style.marginLeft = mousePositionX;
		cursorGun.style.marginTop = mousePositionY;
	}
	requestAnimationFrame(animate);
}
animate();