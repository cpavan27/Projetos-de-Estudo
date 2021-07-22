//Adicionar novo paciente

//seleciona o form
let formAdd = document.querySelector("#form-add");

//seleciona o botão
let botao = document.querySelector("#adicionar-paciente");



function addPacienteTabela (paciente){    

    //criando tr
    let tr = createTR(paciente);

    if (paciente.nome == "" || paciente.peso == "" || paciente.altura == "" || paciente.gordura == ""){
        alert("Dados faltando");
    }else if(validaPeso(paciente.peso) != true){
        alert("Peso invalido");
    }else if(validaAltura(paciente.altura) != true){
        alert("Altura invalida");
    }
    else {
        let tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(tr);
        formAdd.reset();
    }
}

function getPacienteCampos(form){
    let paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculoIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function createTR(paciente){
    
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //JEITO BURRO
    // let nomeTd = document.createElement("td");
    // nomeTd.classList.add("info-nome");
    // let pesoTd = document.createElement("td");
    // pesoTd.classList.add("info-nome");
    // let alturaTd = document.createElement("td");
    // alturaTd.classList.add("info-nome");
    // let gorduraTd = document.createElement("td");
    // gorduraTd.classList.add("info-nome");
    // let imcTd = document.createElement("td");
    // // imcTd.classList.add("info-nome");
   
    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    //JEITO Meio-CERTO
    // let nomeTd = createTD(paciente.nome,"info-nome");
    // let pesoTd = createTD(paciente.peso,"info-peso");
    // let alturaTd = createTD(paciente.altura,"info-altura");
    // let gorduraTd = createTD(paciente.gordura,"info-gordura");
    // let imcTd = createTD(paciente.imc,"info-IMC");


    
    //JeITO Clean
    pacienteTr.appendChild(createTD(paciente.nome,"info-nome"));
    pacienteTr.appendChild(createTD(paciente.peso,"info-peso"));
    pacienteTr.appendChild(createTD(paciente.altura,"info-altura"));
    pacienteTr.appendChild(createTD(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(createTD(paciente.imc,"info-IMC"));

    return pacienteTr;
}

function createTD(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

botao.addEventListener("click", function(event){
    event.preventDefault();
    //puxando informações dos campos
    let paciente = getPacienteCampos(formAdd);
    addPacienteTabela(paciente);
});