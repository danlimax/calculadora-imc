const calculate = document.querySelector("#calculate");

calculate.addEventListener("submit", handleButtonClick);

function handleButtonClick(e) {
  const inputWeight = document.querySelector("#weight");
  const inputStature = document.querySelector("#stature");
  const imcResult = document.querySelector("#result");
  const p = paragraphElement();
  const weight = Number(inputWeight.value);
  const stature = Number(inputStature.value);
  const imc = calculateImc(weight, stature);
  const levelImc = imcRating(imc);

  imcResult.innerHTML = "";
  imcResult.appendChild(p);

  p.innerHTML = `Seu imc é <strong>${imc}</strong> classificado como <strong>${levelImc}</strong> `;
  e.preventDefault();
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
