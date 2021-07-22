const pessoa = {
    nome: 'Mamaco',
    idade: 500,
    pais: 'mamacolandia',
    salario: 2354433,
    hobi: 'botar lagarto pra mamar',
    estadoCivil: 'Solteiro na pista'
};

exibirString(pessoa);

function exibirString(obj){
    
    for(let prop in obj){
        
        if(typeof obj[prop] === "string"){
            console.log(prop,obj[prop]);
        }

    }
    
}


