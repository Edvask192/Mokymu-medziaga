function onGetJokeClick() {
    console.log('get joke')

    async function fetchJokes() {
        try {
            const response = await fetch('https://icanhazdadjoke.com', {
                headers: { Accept: 'applicatrrion/json' }
            });

            const joke = await response.json()

            return joke;
        } catch (e) {
            throw e;
        }
    }

    fetchJokes()
        .then(data => document.getElementById('jokeValue').innerHTML = data.joke)
        .then(error => { console.log(error) })
}