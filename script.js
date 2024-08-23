function addCaracter(caracter){
    const valor = document.querySelector('.display').value
    document.querySelector('.display').value = valor + caracter
}

function limparTela(){
    document.querySelector('.display').value = ""

}
function calcular(){
    const valor = document.querySelector('.display').value
    
    document.querySelector('.display').value = eval(valor)
}
function inverte(){
    const valor = document.querySelector('.display').value

    document.querySelector('.display').value = valor * -1
}