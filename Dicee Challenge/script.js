
    let n1 = Math.random();
    let n2 = Math.random();
    let dice1 = Math.floor(n1*6)+1;
    let dice2 = Math.floor(n2*6)+1;

    let winnerText = function(winner){
        document.querySelector(".heading").textContent = `Player ${winner} wins the game π₯°π`;
}

document.querySelector("img.img1").setAttribute("src",`images/dice${dice1}.png`);
document.querySelector("img.img2").setAttribute("src",`images/dice${dice2}.png`);

if(dice1 > dice2){
    document.querySelector(".heading").textContent = "Player 1 wins the Game π₯°";
}
else if(dice1 < dice2){
    document.querySelector(".heading").textContent = "Player 2 wins the Game π";
}
else{
    document.querySelector(".heading").textContent = "Draw happening guys try againπ"
}