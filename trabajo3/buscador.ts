import * as rs from 'readline-sync';

const texto:string="Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";
let buscar:string=rs.question('que palabra quieres buscar ');
let veces:number=0;


function cuantasVeces(texto:string, buscar:string):number{
    let arrayTexto=texto.toLocaleUpperCase().split(" ");
    buscar= buscar.toLocaleUpperCase();
    for(let i = 0;i<arrayTexto.length;i++){
        if(arrayTexto[i]==buscar || arrayTexto[i] == buscar+'.' || arrayTexto[i]==buscar+',' || arrayTexto[i]==buscar+'?' || arrayTexto[i] == buscar +':'){
            veces=veces+1;
        }
    }
    
    return veces;
}


cuantasVeces(texto, buscar);


console.log(`la palabra "${buscar}" fue encontrada ${veces} veces en el texto.`);

