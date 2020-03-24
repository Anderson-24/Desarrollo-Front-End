"use strict"

//Developer
//Json => JavaScript Object Notacion: intercambio de objes¿tos bastante descriptivo

var persona = [
    {Nombre: "Anderson",Apellido: "Duarte", Edad: 21},
    {Nombre: "Anderson1",Apellido: "Duarte1", Edad: 22},
    {Nombre: "Anderson2",Apellido: "Duarte2", Edad: 23},
    {Nombre: "Anderson3",Apellido: "Duarte3", Edad: 24}
]

// para cconvertirlo en formato .Json en especial para que sea un elemento almacenado en cadena de texto lo escribiremos de la siguiente forma
var PersonaJson = JSON.stringify(persona);
//la propiedad stringify transforma la variable estilo array como cadena de String para transformarla de nuevo de la siguiente forma 
var RecuperarPersona = JSON.parse(PersonaJson);
//La propiedad "parse" interpreta la cadena de string, y la  convierte en estructura para qque pueda ser interpretada

// tenemos la obcion del hacer un validador en una linea de codigo 
var NumUno = 2;
var NumDos = 4;
var Resultado = NumUno > NumDos ? "Cumple" : "No Cumple";
console.log("La condicion " +  Resultado);

//para mirar el tipo de dato de una variable es decir si es "String, Numerico, Boolean o un Object"
var Tipovariable = 10;
console.log(typeof Tipovariable);

//recordando el uso de If en Javascript
if(NumUno < NumDos){
    console.log("La condicion cumple");
}
else{
    console.log("La condicion NO cumple");
}

// Ciclos
    //Definifo
    var Total = 10
    for(let  Itm = 0; Itm <= Total; Itm++){
        console.log("Numero de la secuencia es: "+Itm);
        //debugger;
        //accion en el navegador para mirar el valor de las variables, lo podremos notar en "Watch" al ejecutarce el Debugger
    }

    //Preguntamos si podemos ejecutar las acciones y luego las ejecutamos.
    while(Total >= 0) {
        console.log("Numero Actual es: " + Total);
        Total--;
        //debugger;
    }
    
    //Ejecutamos acciones y lueego preguntamos la continuidad
    do{
        console.log("Se ejecuta la accion con un valor de:" + Total);
        Total--;
        //debugger;
    }
    while(Total >= 0)


    //Control de siclo
    var NumA = 0
    for(let NumB = 0; NumB <= 15; NumB ++) {
        if(NumA = 5){
            console.log("Se ha encontrado el numero requerido");
            break;
            //Sale del ciclo
        }
        if (NumB % 2 == 0) {
            continue;
            //Corta la acciones siguientes
        }
        NumA++;
        //debugger;
    }

//Funciones: conjuntos de intruciones, tambien llamada metodo.

function Greet(Complement,Name) {
    var greet = "Hello Word";
    var devuelve = greet + " " + Complement + " " + Name;
    return devuelve;
}
var Retorna = Greet("developer","AndersonDS");


//Parametros SPREAD 
function ImplemArray(Complement,Name, ...Demas) {
    var greet = "Hello Word";
    var devuelve = greet + " " + Complement + " " + Name;
    //
    if (Demas != ""){
        console.log("Los otros parametros son: " + Demas);
    }
    return devuelve;
}

var Retornados = ImplemArray("developer","AndersonDS","SpaceX");

//los tres puntos esparcen los parametros de tal forma que complemente los que falten y reciba los que sobren
function FunSpread(Prm1,Prm2,...Prm3){
    console.log("ParametroUno:",Prm1);
    console.log("ParametroDos:",Prm2);
    console.log("OtrosParametors",Prm3);
    return true;
}
var enviararray = ["Hola","Mundo"];
var Retornados = FunSpread(...enviararray,"developer","AndersonDS","SpaceX");

//funciones Anonimas


