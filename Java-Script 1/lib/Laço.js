
//For

// for(let i = 0; i < 20; i++){
//     let mamaco = i;
//     console.log("Boa Meno" + mamaco)
    
// };


//While

// let i = 5;

// while(i >= 1){
//     if (i % 2 !== 0){
//         console.log(i);
//     };
//     i--;
// };



//Do...While

// let i = 0
// do {
//     console.log('Mamaco')
//     i++;
// } while(i <= 20);




//For...In

const pessoa = {
    nome: 'Mamaco',
    idade: '500'
};

for(let chave in pessoa){
    console.log(chave, pessoa.nome);
}

const cores = ['Ver', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}


//For....Of

for(let cor of cores) {
    console.log(cor);
}

