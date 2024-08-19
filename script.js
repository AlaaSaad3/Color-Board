const container = document.getElementById("container");
var colors = ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF", "#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"]

var squares = 400

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div")
    square.classList.add("square");
    square.addEventListener("mouseover", () => SetColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square)
}

function SetColor(element) {
    var color = RandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 3px"

}
function RandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}