const calculate = document.querySelector("#calculate");
const inputWeight = document.querySelector("#weight");
const inputStature = document.querySelector("#stature");
const imcResult = document.querySelector("#result");

function handleButtonClick() {
  const p = paragraphElement();
  const weight = Number(inputWeight.value);
  const stature = Number(inputStature.value);
  const imc = calculateImc(weight, stature);
  const levelImc = imcRating(imc);

  imcResult.innerHTML = "";
  imcResult.appendChild(p);

  if (weight === NaN || weight <= 0) {
    return (p.innerHTML = "Preencha todos os campos.");
  }
  if (stature === NaN || stature <= 0) {
    return (p.innerHTML = "Preencha todos os campos.");
  }
  p.innerHTML = `Seu imc é <strong>${imc.replace(
    ".",
    ", "
  )}</strong> classificado como <strong>${levelImc}</strong> `;
}

function calculateImc(weight, stature) {
  const imc = weight / stature ** 2;
  return imc.toFixed(2);
}

function imcRating(imc) {
  if (imc < 18.5) {
    return "abaixo do peso.";
  }
  if (imc >= 18.5 && imc < 25) {
    return "peso normal.";
  }
  if (imc >= 25 && imc < 30) {
    return "sobrepeso.";
  }
  if (imc >= 30 && imc < 35) {
    return "obesidade Grau I.";
  }
  if (imc >= 35 && imc < 40) {
    return "obesidade Grau II.";
  }
  if (imc >= 40) {
    return "obesidade grau III.";
  }
}

function paragraphElement() {
  const p = document.createElement("p");
  return p;
}

document.addEventListener("keypress", function (e) {
  console.log;
  if (e.code === "Enter") {
    handleButtonClick();
  }
});
