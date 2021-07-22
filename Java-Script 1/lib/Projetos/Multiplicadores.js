somar(10);


function somar(num){
    let mult3 = [];
    let mult5 = [];
    for(let i=1; i <= num; i++){
        if(i % 3 == 0){
            mult3.unshift(i);              
        }
        if(i % 5 == 0){
            mult5.unshift(i);
        }        
    }
    console.log(mult3);
    console.log(mult5);
    let total3 = mult3.reduce(function(total3, mult3){
        return total3 + mult3;
    }, 0);
    let total5 = mult5.reduce((total5, mult5) => total5 + mult5, 0);
    console.log(total3);
    console.log(total5);
    console.log(total5+total3);

}