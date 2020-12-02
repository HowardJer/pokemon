/*
    Start by collecting your game data from your cookie(s) and assigning it to variable(s)...
    keep in mind that cookie data is stored as a string - be sure to use Number() if passing integers
    and JSON.parse if passing JSON as cookie data.
*/


let game = JSON.parse(Cookies.get("game"));
let cpu = game.cpu;
let cpuName = cpu.pokemon.name;
let cpuHP = Number(cpu.pokemon.hp);
let cpuAttack = Number(cpu.pokemon.attack);
let player = game.player;
let playerName = player.pokemon.name;
let playerHP = Number(player.pokemon.hp); 
let playerAttack = Number(player.pokemon.attack);



let log = [];
console.log(game)

// player data

document.querySelector(".player .name").innerHTML = playerName;    //gets name of pokemon player
document.querySelector(".player .health").innerHTML = playerHP;    //gets hp for pokemon player
document.querySelector(".player img").src = player.pokemon.image;            //gets image for pokemon player

// cpu data

document.querySelector(".cpu .name").innerHTML = cpuName;    //gets name of pokemon cpu
document.querySelector(".cpu .health").innerHTML = cpuHP;    //gets hp for pokemon cpu
document.querySelector(".cpu img").src = cpu.pokemon.image;            //gets image for pokemon cpu



document.querySelector(".game-button").addEventListener("click", function() {
    document.querySelector(".game-button").innerHTML = "ARE YOU READY TO DO BATTLE?";     
    document.querySelector(".cpu .name").style.color = "red"

});

/*    
    Deal with your "battle sequence" by:
        - Subtracting player attack damage from the CPU's health.
        - Record this action in your "battlelog" (tip: an array works well for the battlelog)
        - Subtracting CPU attack damage from the Player's health.
        - Record this action in your "battlelog"
        - Determining if there has been a win, loss, or draw.
        - Record the result in your "battlelog"
        - Save the updated game state (ie. player/cpu pokemon and health) to a cookie(s)
*/


// document.getElementById("gameBtn").addEventListener("click", function() {
//     document.getElementById("cpuName").style.color = "red";
    // function battle() {
    //     if(playerHP > 0 && cpuHP > 0) {
    //         // attackButton.style.color = "red";
    //         cpuHP = cpuHP - playerAttack;
    //         playerHP = playerHP - cpuAttack;
    //         document.querySelector('.player .health').innerHTML = playerHP;
    //         document.querySelector('.cpu .health').innerHTML = cpuHP;
    //         let battlelog = document.querySelector('.battlelog');
    //         battlelog.innerHTML += '<li>' + playerName + ' inflicted ' + playerAttack + ' points of damage, and ' 
    //             + cpuName + ' inflicted ' + cpuAttack + ' points of damage.' + '</li>';
    //         // battle();
    //     }
    // }


    
   
    
    
    
    
    
    
    
    /*
        - Use selectors to target and fill in the img, .name, and .health elements on battle.html
        - Display the .battlelog contents
        - If the battle is over, present the user with a button to go back to index.html to start a new round
          and also wipe the cookies. 
        - Otherwise, present the user with a button to refresh the page and complete the next battle sequence.
    */