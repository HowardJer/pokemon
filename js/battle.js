/*
    Start by collecting your game data from your cookie(s) and assigning it to variable(s)...
    keep in mind that cookie data is stored as a string - be sure to use Number() if passing integers
    and JSON.parse if passing JSON as cookie data.
*/


let game = JSON.parse(Cookies.get("game"));
let cpu = game.cpu;
let player = game.player;
let log = [];
console.log(game)

// player data

document.getElementById("playerName").innerHTML = player.pokemon.name;  //gets name of pokemon player
document.getElementById("playerHP").innerHTML = player.pokemon.hp;      //gets hp for pokemon player
document.getElementById("playerAvatar").src = player.pokemon.image;      //gets image for pokemon player


// cpu data

document.getElementById("cpuName").innerHTML = cpu.pokemon.name;  //gets name of pokemon cpu
document.getElementById("cpuHP").innerHTML = cpu.pokemon.hp;      //gets hp for pokemon cpu
document.getElementById("cpuAvatar").src = cpu.pokemon.image;     // get image for cpu player

document.getElementById("gameBtn").innerHTML = "ARE YOU READY TO DO BATTLE?";     // get image for cpu player


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
document.getElementById("gameBtn").addEventListener("click", function() {
    document.getElementById("cpuName").style.color = "red";
    
    });
    
    
    
    
    
    
    
    /*
        - Use selectors to target and fill in the img, .name, and .health elements on battle.html
        - Display the .battlelog contents
        - If the battle is over, present the user with a button to go back to index.html to start a new round
          and also wipe the cookies. 
        - Otherwise, present the user with a button to refresh the page and complete the next battle sequence.
    */