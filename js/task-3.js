const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => { 
    const currentValue = event.currentTarget.value.trim();
    output.textContent = currentValue ? currentValue : "Anonymous";
});