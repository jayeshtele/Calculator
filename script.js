const display = document.querySelector("#display");
const button = document.querySelectorAll("button");



button.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id === "=") {
            display.innerText = eval(display.innerText);
        } else if (btn.id === "ac") {
            display.innerText = "";
        } else if (btn.id === "de") {
            display.innerText = display.innerText.slice(0, -1);
        } else {
            display.innerText = display.innerText + btn.id;
        }
    })
})
