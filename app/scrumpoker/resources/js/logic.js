const BIRD_FLYING_STATES = [
    BirdState.UP,
    BirdState.LEFT,
    BirdState.RIGHT,
    BirdState.UP_LEFT,
    BirdState.UP_RIGHT
];

const GAME_RUNNING_STATES = [
    GameState.BIRD_FLYING,
    GameState.BIRD_FLYING_SHOT_TAKEN
]

const BIRD_FLYING_SPEED = 2;
const BIRD_FALLING_SPEED = 4;

function updateGameLogic(tick) {
    if (CONTEXT.game.state === GameState.STOPPED) {
        return;
    } 
    
    if (CONTEXT.game.state === GameState.STARTED) {
        playAudio('/resources/audio/intro.mp3');
        startGame();
    } else if (CONTEXT.game.state === GameState.BIRD_ESCAPED) {
        birdEscaped();
        setTimeout(() => {
            startGame();
        }, 1000 + Math.random() * 3000);
    }

    if (GAME_RUNNING_STATES.includes(CONTEXT.game.state)) {
        if (tick === 0 && Math.random() > 0.5) {
            const newState = BIRD_FLYING_STATES[Math.floor(Math.random() * 5)];
            if (newState !== CONTEXT.game.bird.state) {
                playAudio('/resources/audio/duck-flapping.mp3', false);
                CONTEXT.game.bird.state = newState;
            }
        }
        
        moveBird();
        checkEscape();
        checkGroundHit();
    } else if (CONTEXT.game.state === GameState.BIRD_HIT) {
        moveBird();
        checkGroundHit();
    }
}

function startGame() {
    CONTEXT.game.dog.state = DogState.HIDDEN;
    CONTEXT.game.bird.state = BirdState.UP;
    CONTEXT.game.bird.y = CONTEXT.game.worldHeight;
    CONTEXT.game.bird.x = Math.random() * CONTEXT.game.worldWidth;
    CONTEXT.game.state = GameState.BIRD_FLYING;
    playAudio('/resources/audio/duck-quack.mp3');
}

function birdEscaped() {
    CONTEXT.game.state = GameState.STOPPED;
    CONTEXT.game.bird.state = BirdState.HIDDEN;

    CONTEXT.game.dog.state = DogState.LAUGHING;
    CONTEXT.game.dog.x = CONTEXT.game.worldWidth / 2;
    CONTEXT.game.dog.y = CONTEXT.game.worldHeight - 70;
    playAudio('/resources/audio/laugh.mp3');
}

function moveBird() {
    if (CONTEXT.game.bird.state === BirdState.UP) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.LEFT) {
        CONTEXT.game.bird.x-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.RIGHT) {
        CONTEXT.game.bird.x+=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.UP_LEFT) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
        CONTEXT.game.bird.x-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.UP_RIGHT) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
        CONTEXT.game.bird.x+=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.FALLING) {
        CONTEXT.game.bird.y+=BIRD_FALLING_SPEED;
    }
}

function checkEscape() {
    if (CONTEXT.game.state === GameState.BIRD_FLYING && (CONTEXT.game.bird.y <= 0 || CONTEXT.game.bird.x <= 0 || CONTEXT.game.bird.x >= CONTEXT.game.worldWidth)) {
        CONTEXT.game.state = GameState.BIRD_ESCAPED;
    }
}

function checkGroundHit() {
    if (CONTEXT.game.state === GameState.BIRD_HIT && CONTEXT.game.bird.y >= CONTEXT.game.worldHeight) {
        playAudio('/resources/audio/duck-drop.mp3');
        CONTEXT.game.state = GameState.BIRD_CAUGHT;
        CONTEXT.game.bird.state = BirdState.HIDDEN;
        CONTEXT.game.dog.state = DogState.CAUGHT;
        CONTEXT.game.dog.x = CONTEXT.game.worldWidth / 2;
        CONTEXT.game.dog.y = CONTEXT.game.worldHeight - 70;
        playAudio('/resources/audio/intro.mp3');
        setTimeout(() => {
            if (CONTEXT.game.state === GameState.BIRD_CAUGHT) {
                startGame();
            }
        }, 3000);
    }
}

const foreground = document.getElementById('foreground');
const shotArea = document.querySelector('#foreground span')
let shotTimeoutId;
function shotClickListener(e) {
    if (CONTEXT.game.state === GameState.BIRD_FLYING) {
        CONTEXT.game.state = GameState.BIRD_FLYING_SHOT_TAKEN;

        playAudio('/resources/audio/shot.mp3');
        const mousePositionX = e.pageX;
	    const mousePositionY = e.pageY;
        
        shotArea.style.marginLeft = mousePositionX - window.pageXOffset - 40 + 'px';
        shotArea.style.marginTop = mousePositionY - window.pageYOffset - 40 + 'px';
        
        foreground.style.visibility = 'inherit'
        if (shotTimeoutId) {
            clearTimeout(shotTimeoutId);
        }
        shotTimeoutId = setTimeout(() => {
            foreground.style.visibility = 'hidden';
        }, 100);

        setTimeout(() => {
            // shot cooldown
            if (CONTEXT.game.state === GameState.BIRD_FLYING_SHOT_TAKEN) {
                CONTEXT.game.state = GameState.BIRD_FLYING;
            }
        }, 2000);

        checkHitInArea(mousePositionX - 40, mousePositionY - 40, 80);
    }
}
document.addEventListener("click", shotClickListener);

function checkHitInArea(startX, startY, size) {
    const x = CONTEXT.game.bird.x;
    const y = CONTEXT.game.bird.y;

    if (x >= startX && x <= startX + size && y >= startY && y <= startY + size) {
        CONTEXT.game.state = GameState.BIRD_HIT;
        CONTEXT.game.bird.state = BirdState.HIT;
        playAudio('/resources/audio/duck-quack.mp3');
        setTimeout(() => {
            CONTEXT.game.bird.state = BirdState.FALLING;
            playAudio('/resources/audio/duck-falling.mp3');
        }, 700);
    }
}