const container = document.querySelector("#container");
const button = document.querySelector("button")

function generateRaster(number) {
    container.textContent = "";
    for (let i = 0; i < number; i++) {
        const square = document.createElement("div");
        square.classList.add("vak");
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black"
        }
        )
    };

}

generateRaster(256);

button.addEventListener("click", () => {
    const antwoord = prompt("Hoeveel vakjes per kant?");
    const answer = Number(antwoord);
    const number = answer * answer;
    generateRaster(number)
});