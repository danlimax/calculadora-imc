
const imc = imcFormula(78, 1.77)



function imcFormula (weight, height){
    const imc = weight / (height ** 2)
    return imc.toFixed(1)
}

function imcResult(imc){
if(imc < 18.5){
    return "Abaixo do peso"
} 

if(imc < 25){
    return "Peso normal"
} 

if(imc < 30){
    return "Sobrepeso"
} 

if(imc < 35){
    return "Obesidade Grau I"
} 

if(imc < 40) {
    return "Obesidade Grau II"
} 

if(imc >= 40){
    return "Obesidade Grau III"
} 

else {
    return "Operação inválida"
}


    
}

imcResult(imc)

console.log(imcResult(imc))
