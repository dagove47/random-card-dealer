window.handleClick = function handleClick() {

    let suits = ['♠', '♣', '♥', '♦'];
    let num = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suitsContent = document.getElementById("suits");
    let suits2Content = document.getElementById("suits2");
    let numContent = document.getElementById("number");

    let suitsRandom = suits[(Math.floor(Math.random() * (3 - 0 + 1)) + 0)];
    let numRandom = num[(Math.floor(Math.random() * 12 - 0 + 1)) + 0];

    suitsContent.textContent = suitsRandom;
    suits2Content.textContent = suitsRandom;
    numContent.textContent = numRandom;

    if (suitsRandom == '♥' || suitsRandom == '♦') {
        suitsContent.style.color = "red";
        suits2Content.style.color = "red";
        numContent.style.color = "red";
    } else {
        suitsContent.style.color = "black";
        suits2Content.style.color = "black";
        numContent.style.color = "black";
    }
}