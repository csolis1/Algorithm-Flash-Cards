var name = prompt("What is your name");

alert(`Hi, ${name}. Let's study some algorithms`)

const card = document.getElementById("card");

card.addEventListener("click", flipCard);
function flipCard() {
    card.classList.toggle("flipCard");
}
