
exibirTipo(365);

function exibirTipo(limite){
    for(let i=0; i <= limite; i++){
         if (i % 2 == 0){
            console.log(i + " PAR");
        }else if(i % 2 !== 0){
            console.log(i + " IMPAR");
        };
    };

}