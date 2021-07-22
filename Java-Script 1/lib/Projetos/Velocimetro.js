

function verificarVel(velocita){
    let pontuacao = 0;
    if (velocita <=70){
        console.log("OK");
    } else if (velocita > 70){
        pontuacao = Math.floor((velocita - 70) / 5);
        let exb = pontuacao >= 12 ? 'Carteira suspensa' : 'Você passou acima da velocidade';
        console.log(exb);
        console.log(pontuacao);
    }
}

verificarVel(72);