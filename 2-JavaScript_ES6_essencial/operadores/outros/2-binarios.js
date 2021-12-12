//in
something in somethingItems

//arrays 
var arvores = new Array("Pau Brasil", "Ype", "Cedro", "Carvalho");
0 in arvores; //retorna true
3 in arvores; //retorna true  
6 in arvores; //retorna false

"cedro" in arvores; //retorna false (você deve especificar o número do índice, não o valor naquele índice)
"length" in arvores; //retorna true (lenght é uma propriedade de Array)

//Objetos predefinidos
"PI" in math;  // retorna true
var minhaString = new String("Coral");
"length" in minhaString; //retorna true

//Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998}
"marca" in meuCarro; //retorna true
"modelo" in meuCarro; //retorna true

//instanceof 
objeto instanceof tipoObjeto;

var dia = new Date(2018, 12, 17);

if(dia instanceof Date){
    //código aqui
}