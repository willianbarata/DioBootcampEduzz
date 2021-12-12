/**
 while(condicao) 
    declaracao
 */

    var n = 0;
    var x = 0;

    while(n < 3){
        n++;
        console.log(`N ${n}`);
        x += n;
        console.log(`X ${x}`);
    }

    console.log(`X Fora ${x}`);