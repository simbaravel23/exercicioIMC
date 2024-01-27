function calcular() {

  /*var tn1 = window.document.getElementById('txtn1')
  var tn2 = window.document.querySelector('input#txtn2')
  var res = window.document.getElementById('res')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 / (n2**2)
  var classificacao = document.getElementById('classi')
  
  
  res.innerText = `O seu IMC é ${s }`   

if (res < 18.5){
        classificacao.innerText = 'Está classificado como abaixo do peso.'
    } else if (res < 25) {
        classificacao.innerText = 'Está classificadocom o peso ideal. Parabéns!'
    } else if (res < 30){
        classificacao.innerText = 'Está classificadolevemente acima do peso.'
    } else if (res < 35){
        classificacao.innerText = 'Está classificadocom obesidade grau I.'
    } else if (res < 40){
        classificacao.innerText = 'Está classificado com obesidade grau II.'
   } else  {
        classificacao.innerText = 'Está classificado com obesidade grau III.'
   } 
}  */   
    
let peso = document.getElementById("txtn1").value;
let altura = document.getElementById("txtn2").value;
let imc = peso / (altura * altura);

    if (imc <= 18.5) {
  resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Abaixo do Peso.`;
}else if (imc > 18.5 && imc <= 24.9) {
    resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Peso Normal.`;

}else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Sobrepeso.`;
}else if (imc >= 30 && imc <= 34.9){
    resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau I.`;

}else if (imc >= 35 && imc <= 39.9){
    resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau II.`;

}
else{
    resultado.innerHTML = `Seu resultado é ${(imc.toFixed(2))}. Seu grau é: Obesidade Grau III.`;

}
}
   
  
