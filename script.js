//formula bmi = kg / (h / 100 * h / 100)

let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", getBmi);

function getBmi() {
    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseFloat(document.getElementById("kg").value);
    let bmi;
    let newCm = parseFloat(cm / 100);
    bmi = kg / (newCm * newCm);
    bmi = bmi.toFixed(1);
    result.innerHTML = `Your BMI is ${bmi}`;
}