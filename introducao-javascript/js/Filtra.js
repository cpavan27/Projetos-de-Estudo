let campoInput = document.querySelector("#filtrar-tabela");

campoInput.addEventListener("input", function(){
    let pacientes = document.querySelectorAll(".paciente");
    
    if( this.value.length > 0){
        
        for(let i=0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            //RegExp é expressão regular. Usado para pesquisar expressões dentro de uma string
            let expressao = new RegExp(this.value, "i");
            
            if ( !expressao.test(nome) ){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        
        for(let i=0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }
    }
    
})