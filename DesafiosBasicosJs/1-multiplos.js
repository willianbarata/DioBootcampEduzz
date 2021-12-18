
let A = -1;
let B = -6;
let multiplo = 0;

if(A < 0 ){
    A = A * -1;
  }
  if(B < 0){
    B = B * -1;
  }
  
  if(A > B){
      multiplo = A % B;
  }else {
      multiplo = B % A;
  }
  
  
  if (  multiplo == 0   ) 
      console.log(  "Sao Multiplos"  );                   //complete com a sua lógica
  else 
      console.log(     "Nao sao Multiplos"    );

      //teste