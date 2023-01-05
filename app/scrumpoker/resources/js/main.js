let start;

function update(tick) {
    updateGameLogic(tick)
}

function draw(tick) {
    CONTEXT.ctx.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
    renderGame(tick)
}

let tick = 0;
function animate(timestamp) {
    if (start === undefined) {
        start = timestamp
    }

    // 60 fps
    if ((timestamp - start) >= 16.6) {
        update(tick)
        draw(tick)
        start = timestamp
        tick = ++tick % 60
    }

	requestAnimationFrame(animate);
}

CONTEXT.assetsLoaded.then(() => {
    console.info("assets loaded, starting animation")
    CONTEXT.animationRequestId = requestAnimationFrame(animate);
});

const cursorGun = document.getElementById("cursor-gun");
let mousePositionX;
let mousePositionY;
function cursorGunMoveListener(e) {
    mousePositionX = e.pageX - window.pageXOffset;
	mousePositionY = e.pageY - window.pageYOffset;

    cursorGun.style.marginLeft = mousePositionX + 'px';
	cursorGun.style.marginTop = mousePositionY + 'px';
}
document.addEventListener("mousemove", cursorGunMoveListener);