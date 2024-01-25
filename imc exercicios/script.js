function calcular(){
    const peso = document.getElementById('txtp').value
    const altura = document.getElementById('txta').value
    const res = document.getElementById('txtres').value

    if ( altura !== '' &&  peso !== '') {

    const valorIMC = (peso/(altura**2)).toFixed(2);
    }
}