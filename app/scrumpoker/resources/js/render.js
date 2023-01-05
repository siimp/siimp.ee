const SPRITE_SCALE = 50;

function renderGame(tick) {
    if (CONTEXT.game.bird.state !== BirdState.HIDDEN) {
        drawBird(tick);
    }

    if (CONTEXT.game.dog.state !== DogState.HIDDEN) {
        drawDog(tick);
    }
}

const SPRITE_ANIMATION_FRAMES = {
    hit: 1,
    falling: 1
}
let birdAnimationFrame = 1;
function drawBird(tick) {
    let sprite = CONTEXT.game.bird.state.toLowerCase();

    const max = SPRITE_ANIMATION_FRAMES[sprite] ? SPRITE_ANIMATION_FRAMES[sprite] : 3;
    if (birdAnimationFrame > max) {
        birdAnimationFrame = 1;
    }
    drawSprite(`${sprite}_${birdAnimationFrame}.png`, CONTEXT.game.bird.x, CONTEXT.game.bird.y, SPRITE_SCALE);
    
    if (tick % 10 === 0) {
        birdAnimationFrame++;
    }
}

let dogAnimationFrame = 1;
function drawDog(tick) {
    if (CONTEXT.game.dog.state === DogState.CAUGHT) {
        drawSprite(`dog_caught_bird.png`, CONTEXT.game.dog.x, CONTEXT.game.dog.y, SPRITE_SCALE + 50);
        return;
    }

    drawSprite(`dog_${dogAnimationFrame}.png`, CONTEXT.game.dog.x, CONTEXT.game.dog.y, SPRITE_SCALE + 50);
    
    if (tick % 5 === 0) {
        dogAnimationFrame++;

        if (dogAnimationFrame > 2) {
            dogAnimationFrame = 1;
        }
    }
}

function drawSprite(spriteName, x, y, scale) {
    const s = CONTEXT.spritesheetData[spriteName]

    if (!s) {
        throw new Error(`sprite ${spriteName} not found`);
    }

    CONTEXT.ctx.drawImage(CONTEXT.spritesheet, s.x, s.y, s.w, s.h, x + s.cx, y + s.cy, scale, scale);
}