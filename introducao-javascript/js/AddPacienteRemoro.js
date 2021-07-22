
let botaoBuscar = document.querySelector("#adicionar-paciente-remoto");

botaoBuscar.addEventListener("click", function(){
    let erro = document.querySelector("#erro-ajax");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        
        if( xhr.status == 200){
            erro.classList.add("invisivel");
            let paciente = JSON.parse(xhr.responseText);
            paciente.forEach(function(paciente){
            addPacienteTabela(paciente);
        })
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erro.classList.remove("invisivel");
        }

        

        
    })

    
    console.log("Buscando...")
})