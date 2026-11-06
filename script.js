const container = document.querySelector("#container");
const button = document.querySelector("button")

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("vak");
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black"
    }
    )
};

button.addEventListener("click", () => {
    const antwoord = prompt("Hoeveel vakjes per kant?");
    const number = Number(antwoord)
    console.log(number);
    console.log(typeof number);

})