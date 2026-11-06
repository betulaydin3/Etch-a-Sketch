const container = document.querySelector("#container");
const button = document.querySelector("button")

function generateRaster(number) {
    if (number > 100 || number < 1 || Number.isNaN(number)) {
        alert("Vul een getal tot 100 in.");
        return
    }
    container.textContent = "";
    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");
        square.classList.add("vak");
        square.style.width = 480 / number + "px";
        square.style.height = 480 / number + "px";
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "rgb(188, 156, 226)"
        }
        )
    };
}
generateRaster(16);

button.addEventListener("click", () => {
    const antwoord = prompt("Hoeveel vakjes per kant?");
    const number = Number(antwoord);
    generateRaster(number)
});