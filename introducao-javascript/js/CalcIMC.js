//Calcular IMC e alterar na tabela
let paciente = document.querySelectorAll(".paciente");

function validaImcFor(paciente){
    for(let i=0; i < paciente.length; i++){
        let peso = paciente[i].querySelector(".info-peso").textContent;
        let altura = paciente[i].querySelector(".info-altura").textContent;
    
        if(peso < 0 || peso > 1000){
            paciente[i].querySelector(".info-imc").textContent = "Peso invalido";
            paciente[i].classList.add("paciente-invalido")
        }else if (altura < 0 || altura > 10 ) {
            paciente[i].querySelector(".info-imc").textContent = "Altura invalida";
            paciente[i].style.backgroundColor = "orange";
        }
        else {
            let imc = calculoIMC(peso, altura);
            paciente[i].querySelector(".info-imc").textContent = imc;
        }
    
    }
}
validaImcFor(paciente);

function calculoIMC(peso, altura){
    let imc = 0;

    imc = peso / ( altura ** 2);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso < 0 || peso >= 1000){
        return false;
    }else {return true};
}
function validaAltura(altura){
    if (altura < 0 || altura >= 10 ) {
        return false;
    }else {return true};
}

//console.log(paciente);
// console.log(peso);
// console.log(altura);
// console.log(IMC);

