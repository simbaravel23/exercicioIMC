function calcular() {

  var tn1 = window.document.getElementById('txtn1')
  var tn2 = window.document.querySelector('input#txtn2')
  var res = window.document.getElementById('res')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var s = n1 / (n2**2)

  res.innerHTML = `O seu IMC é ${s}`

}

  
   var classificacao = document.getElementById('classi')

   

   if (res <= 18.5){
        classificacao.innerHTML = 'Está classificado como abaixo do peso.';
    }else if (res <= 25) {
        classificacao.innerHTML = 'Está classificadocom o peso ideal. Parabéns!';
    }else if (res <= 30){
        classificacao.innerHTML = 'Está classificadolevemente acima do peso.';
    }else if (res <= 35){
        classificacao.innerHTML = 'Está classificadocom obesidade grau I.';
    }else if (res <= 40){
        classificacao.innerHTML = 'Está classificado com obesidade grau II.';
   }else  {
        classificacao.innerHTML = 'Está classificado com obesidade grau III.';
    } 
        
    

   
  
