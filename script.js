var bnum0 = document.getElementById("bnum0")
bnum0.addEventListener("click",num0)
var bnum1 = document.getElementById("bnum1")
bnum1.addEventListener("click", num1)
var bnum2 = document.getElementById("bnum2")
bnum2.addEventListener("click", num2)

var bresultado = document.getElementById("bresultado")
bresultado.addEventListener("click", resultado)
var bsoma = document.getElementById("bsoma")
bsoma.addEventListener("click", soma)

var valor1 = ''
var valor2 = ''
var resultado = ''
var calculo = 0

var calc = document.getElementById("calc")
calc.innerHTML = ''
var res = document.getElementById("res")
res.innerHTML = '0'

function num0() {
    
    if(res.innerHTML == '0' && valor1 == '') {
            res.innerHTML = '0'
        }/*else if (valor1 == '') {
            valor1 += '1'
            res.innerHTML = valor1
        }*/
        else if (valor1 !== '') {
            valor1 += '0'
            res.innerHTML = valor1
        } else if (calculo > 0) {
            valor2 += '0'
            res.innerHTML = valor2
        }
}

function num1() {
    if(res.innerHTML == '0' && valor1 == '') {
        valor1 = '1'
        res.innerHTML = valor1
    }/* else if (valor1 == '') {
        valor1 += '1'
        res.innerHTML = valor1
    }*/
    else if (valor1 !== '') {
        valor1 += '1'
        res.innerHTML = valor1
    } else if (calculo > 0) {
        valor2 += '1'
        res.innerHTML = valor2
    }
    
}

function num2() {
    if(res.innerHTML == '0' && valor1 == '') {
        valor1 = '2'
        res.innerHTML = valor1
    }/* else if (valor1 == '') {
        valor1 += '1'
        res.innerHTML = valor1
    }*/
        else if (valor1 !== '') {
        valor1 += '2'
        res.innerHTML = valor1
    } else if (calculo > 0) {
        valor2 += '2'
        res.innerHTML = valor2
    }
}

function resultado() {
    alert(valor1)
}

function soma() {
    calc.innerHTML = valor1 + "+"
    res.innerHTML = 0
    if (calculo == 0) {
        calculo = Number(valor1)
        valor1 = ''
    } else {
        //let n2 = Number(valor2)
        var soma = calculo + Number(valor2)
        calc.innerHTML = `${calculo} + ${valor2} =`
        res.innerHTML = soma
        //calculo = 0
        //valor2 = ''
    }
    
}