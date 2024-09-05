//Array de objetos
var productos = [
    { nombre: "Arroz", cantidad: 1, precio: 0.60 },
    { nombre: "Margarina", cantidad: 5, precio: 4.50 },
    { nombre: "Pan", cantidad: 6, precio: 1.00 },
    { nombre: "Azucar", cantidad: 3, precio: 5.50 },
    { nombre: "Aceite", cantidad: 1, precio: 5.00 },
    { nombre: "Manteca", cantidad: 2, precio: 8.00 },
    { nombre: "Maicena", cantidad: 1, precio: 2.30 },
    { nombre: "Balsamo", cantidad: 3, precio: 8.90 },
    { nombre: "Ajos", cantidad: 3, precio: 3.99 },
    { nombre: "Sardina", cantidad: 4, precio: 6.95 },
    { nombre: "Chocolate", cantidad: 1, precio: 1.50 },

    
];


for (var i = 0; i < productos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + productos[i].nombre + "</td>";
    html += "       <td>" + productos[i].cantidad + "</td>";
    html += "       <td>" + productos[i].precio  + "</td>";
    html += "<tr>";

    document.getElementById("tbodyProductos").innerHTML += html;

}