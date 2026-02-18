window.addEventListener('load', (event) => {
    var dice1 = document.querySelector(".playerOne");
    var dice2 = document.querySelector(".playerTwo");
    var n = Math.random();
    n = (n * 6) + 1; 
    n = Math.floor(n);
    var message1 = `dice${n}.png`;
    dice1 = document.querySelector(".playerOne img").setAttribute("src", `./${message1}`);

    var m = Math.random();
    m = (m * 6) + 1;
    m = Math.floor(m);
    var message2 = `dice${m}.png`; 
    dice2 = document.querySelector(".playerTwo img").setAttribute("src", `./${message2}`);
    console.log(n, m);
    if(n > m){
        document.querySelector(".introSay").textContent = "Player One WON!!!";
        document.querySelector("#One").setAttribute("id", "winner");
        document.querySelector("#Two").setAttribute("id", "loser");
    }
    else if(n < m){
        document.querySelector(".introSay").textContent = "Player Two WON!!!";
        document.querySelector("#Two").setAttribute("id", "winner");
        document.querySelector("#One").setAttribute("id", "loser");
    }
    else{
        document.querySelector(".introSay").textContent = "Draw";
        document.querySelector(".introSay").style.color = "DodgerBlue";
        document.querySelector("#One").setAttribute("id", "draw");
        document.querySelector("#Two").setAttribute("id", "draw");
    }
});

