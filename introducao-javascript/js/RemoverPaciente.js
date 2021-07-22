

//let pacienteRev = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");



tabela.addEventListener("dblclick", function(event){
    //Target seleciona o alvo do click dentro a area monitorada
    //Parent Node seleciona o "pai" do alvo
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
     
})




// function removePaciente(){
//     pacienteRev.forEach(function(paciente){
//         paciente.addEventListener("dblclick", function(){
//             this.remove();
//         });
//     })
// }