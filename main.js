//let nombre = prompt ("ingrese su nombre");
//alert(nombre);

/* variables y valores */
//para declarar un a variable usamos LET 

/*for (let i = 0; i < 10; i++) {
    alert(i);
}*/

//let inresarNumero = parseInt (prompt("ingresar numero"));

//for (let i = 1; i <=10; i++){
 //   let resultado = inresarNumero * i;
   // alert (inresarNumero + " X " + i + " = " + resultado);
//}


const talle85 = '85';
const talle90 = '90';
const talle95 = '95';
const talle100 = '100';
const talle105 = '105';
let nombre;
let talleSelec;

do{
    nombre = prompt("ingrese su nombre ");
    talleSelec = prompt ("hola " + nombre + " elije tu talle: \n 85 \n 90 \n 95 \n 100 \n 105");

    if (talleSelec == talle85) {
        alert (nombre + " elegiste el talle 85" )
    } else{
        if ( talleSelec == talle90) {
            alert (nombre + " elegiste el talle 90")
        } else {
            if ( talleSelec == talle95) {
                alert (nombre + " elegiste el talle 95")
            } else {
                if ( talleSelec == talle100) {
                    alert (nombre + " elegiste el talle 100")
                } else {
                    if ( talleSelec == talle105) {
                        alert (nombre + " elegiste el talle 105")
                    }
                }
            }
        }
    }


    }while (continuar == 's')
    

