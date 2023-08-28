window.addEventListener('load', function () {
    const joke = document.getElementById('joke')
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,sexist&type=single')
        .then(result => {
            result.json().then(json => {
                const jokeText = json.joke.replace(/(?:\r\n|\r|\n)/g, '<br>')
                console.info(jokeText)
            })
        })
})

