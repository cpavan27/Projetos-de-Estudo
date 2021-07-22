//IF Else
 
let time = new Date();
time.getTime();

let hora = time.getHours();

console.log(time);
console.log(hora);

if (hora > 6 && hora < 12 )  {
    console.log("Bom dia");
   }
   else if (hora > 12 && hora < 18){
    console.log("Boa tarde");
   } 
   else {
    console.log("Boa noite");
   };


 //  Switch Case


 let insert;

insert = "gerente";

 switch(insert){
     case 'comum':
         console.log("Comum");
         break;


         case 'gerente':
        console.log("Gerente");
        break;    
 };