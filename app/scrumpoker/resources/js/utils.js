function loadImage(imageSrc) {
    return new Promise((resolve, error) => {
        const image = new Image()
        image.onload = () => {
            resolve(image)
        }
        image.onerror = () => {
            error()
        }
        image.src = imageSrc
    })
}

async function loadJson(jsonSrc) {
    const request = await fetch(jsonSrc)
    return await request.json()
}

const loadedAudios = {}
function loadAudio(audioSrc) {
    let audio = loadedAudios[audioSrc]
	if (audio) {
        return audio
    }
    audio = new Audio(audioSrc);
    audio.preload = "auto";
    loadedAudios[audioSrc] = audio
    return audio;
}

function playAudio(audioSrc, resetTime=true) {
    audio = loadAudio(audioSrc)

	if(resetTime) {
		audio.currentTime = 0;
	}
	audio.play();
}