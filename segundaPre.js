//Segunda pre-entrega

let colorProducto;
let nombreProducto;
let talle;
let cantidad;
let nombreUser;
let total=0; 
let opcion;



alert ("Hola Bienvenidos a Lorien, ahora podes crear tus propios productos!!");
nombreUser = prompt('Ingresa tu nombre');
    do {
        nombreProducto = prompt ("Ingresa que producto te gustaria cear");
        colorProducto = prompt ("De que color lo diseñarias?");
        talle = prompt ("Selecciona tu talle XS S M L XL");
        cantidad = parseInt(prompt("Ingrese cantidad"));
        if (cantidad <=0) {
            cantidad = parseInt(prompt('Cantidad invalida, ingrese otro item'));
        }/*else {
            total = total + cantidad + nombreProducto + colorProducto;
        }*/
        opcion = prompt("Desea agregar otro item?");
    }while (opcion == 'si');
    alert(`El total para   ${nombreUser}  es:  ${total} \n ${nombreProducto} \n ${colorProducto} \n ${talle}`);


const listaProductos = [];
let cuantificador = 5;

do{
    let crear = prompt("crea un nuevo producto");
    listaProductos.push(crear.toUpperCase());
    alert(listaProductos);
}while(listaProductos != cuantificador)
const nuevaLista = listaProductos.concat([]);
alert(nuevaLista.join("\n"));
