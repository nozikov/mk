let player1 = 
    {
        name : "Antoha1",
        hp : 42,
        img : "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon : ["stick","stick","stick"],
        attack() {
            console.log(this.name+" Fight");
            return null
        }
    }
;
let player2 = 
    {
        name : "Antoha2",
        hp : 42,
        img : "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
        weapon : ["stick","stick","stick"],
        attack() {
            console.log(this.name+" Fight");
            return null
        }
    }
;

function createPlayer (playerClass, player) {
    const $player = document.createElement("div");
    $player.classList.add(playerClass);

    const $arenas = document.querySelector(".arenas");
    $arenas.appendChild($player);

    const $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");
    $player.appendChild($progressbar);

    const $character = document.createElement("div");
    $character.classList.add("character");
    $player.appendChild($character);

    const $life = document.createElement("div");
    $life.classList.add("life");
    $life.style.width = player.hp+"%";
    $progressbar.appendChild($life);

    const $name = document.createElement("div");
    $name.classList.add("name");
    $name.innerText = player.name;
    $progressbar.appendChild($name);

    const img = document.createElement("img");
    img.src = player.img;
    $character.appendChild(img);
}

createPlayer("player1", player1);
createPlayer("player2", player2);