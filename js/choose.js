/*
        - Randomly select a pokemon for the CPU (https://www.w3schools.com/js/js_random.asp)
        - Save the state of the game by storing the following information in a cookie or cookies:
            - Player's chosen pokemon details
            - Player's current health (equal to the pokemon's hp)
            - CPU's chosen pokemon details
            - CPU's current health (equal to the pokemon's hp)
            - Hint: all of this information can be passed in a single cookie
        - Redirect the user to the battle page (https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)
    */

function startGame(index) {
    const randomNumber = Math.floor(Math.random() * pokemon.length);
    const game = {
        player: {
            pokemon: pokemon[index],
            currentHealth: pokemon[index].hp
        },
        cpu: {
            pokemon: pokemon[randomNumber],
            currentHealth: pokemon[randomNumber].hp
        }
    }

    Cookies.set("game", JSON.stringify(game));
    location.href = "battle.html"
}


// Map function to create a choice button for each Pokemon in the list
pokemon.map(function (choice, index) {

    // create a div in memory 
    let div = document.createElement('div');

    // populate the div with the image, name and basic stats
    div.innerHTML = `
        <img src="${choice.image}">
        <h3>${choice.name}</h3>
        <p>Atk: ${choice.attack} | HP: ${choice.hp}</p>
    `;

    // make the div clickable
    div.addEventListener('click', function () {
        startGame(index);

    });

    // then append the div to the .choose-pokemon container
    document.querySelector('.choose-pokemon').append(div);
});