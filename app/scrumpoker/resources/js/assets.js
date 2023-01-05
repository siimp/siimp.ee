let assetsLoaded;
CONTEXT.assetsLoaded = new Promise((resolve, reject) => {
    assetsLoaded = resolve
});

const spritesheetPromise = loadImage('/resources/spritesheet/spritesheet.png');
const spritesheetJsonPromise = loadJson('/resources/spritesheet/spritesheet.json');

// load audios
['intro', 'shot', 'laugh', 'duck-flapping', 'intro', 'duck-quack', 'duck-falling', 'duck-drop'].forEach(audioName => {
    loadAudio('/resources/audio/' + audioName + '.mp3')
});

Promise.all([spritesheetPromise, spritesheetJsonPromise]).then((values) => {
    const spritesheetImage = values[0];
    const spritesheetJson = values[1];

    const spritesheetData = {};
    for (let key in spritesheetJson.frames) {
        let sprite = spritesheetJson.frames[key]
        
        spritesheetData[key] = {
            x: sprite.frame.x,
            y: sprite.frame.y,
            w: sprite.frame.w,
            h: sprite.frame.h,
            cx: -sprite.frame.w * 0.5,
            cy: -sprite.frame.h * 0.5
        }
    }
        
    CONTEXT.spritesheet = spritesheetImage;
    CONTEXT.spritesheetData = spritesheetData;
    assetsLoaded();
});