
// let aluno = [70,100,100,100];
// mediaAluno(aluno);

// function mediaAluno(notas=[]){
//     let media = notas.reduce((media, notas) => media + notas, 0);
//     console.log(media, notas.length);
//     media = media / notas.length
//     console.log(media);
//     if(media > 0 && media <= 59){
//         console.log("Aluno Media F");
//     }else if (media > 60 && media <= 69){
//         console.log("Aluno Media D")
//     }else if(media > 70 && media <= 79){
//         console.log("Aluno Media C")
//     }else if(media > 80 && media <= 89){
//         console.log("Aluno Media B")
//     }else if(media > 90 && media <= 100){
//         console.log("Aluno Media A")
//     }

// }

// contarAsteriscos(15);

// function contarAsteriscos(num){
//     let info="*";   
//     console.log(info); 
//     for(i=2; i <=num; i++){
//         info = info + "*";
//         console.log(info);
//     }

// }

console.log(verPrimo(15));

function verPrimo(num){
    if(num!=1){
        for (let i = 2; i < num ; i++){
            if (num % i == 0){
                return false
            } return num !==1;
        }
    }
}

function numerosPrimos(num){
    for(i=0;i<=num;i++){
        
    }

}