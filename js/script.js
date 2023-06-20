
function guardarDatos() {
    let datoInput = document.getElementById("cantidad").value;
    let datoSelect = document.getElementById("categoria").value;
    
    console.log("Dato del campo de entrada:", datoInput);
    console.log("Dato del campo de selección:", datoSelect);
    
    // Llamada a la función para calcular el precio
calcularPrecio(datoInput, datoSelect);
};


function calcularPrecio(input, select) {
  // Realizar el cálculo del precio utilizando los valores de input y select
  var precioUnitario = 200; // Ejemplo de precio unitario
  var cantidad = parseInt(input); // Convertir el valor de input a número entero
  var precioTotal = cantidad * precioUnitario;
  
  // Mostrar el precio total
  console.log("Precio total:", precioTotal);

    let totalPagar=document.getElementById("pago");

    console.log(totalPagar.value);

    
    

   /* if (select=1) {
        totalPagar.value = precioTotal*0.2;
    } else if (select=2){
        totalPagar.value = precioTotal*0.5;
    } else if(select=3){
        totalPagar.value = precioTotal*0.75;
    }*/

    switch (select) {
        case "1":
            totalPagar.value = precioTotal*0.2;
        break;

        case "2":
            totalPagar.value = precioTotal*0.5;
        break;
        
        case "3":
            totalPagar.value = precioTotal*0.85;
        break;  
    }

  
}



