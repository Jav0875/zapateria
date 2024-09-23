//JavaScript Document
var datos={};
var misDatos=info=>{
    console.log(info);
    datos.zapateriaV=info;
    var html="";
    html+="<h2>Productos</h2>";

    html+="<table border='2'>";
    html+="<tr>";
    html+="<th>FOLIO</th>";
    html+="<th>DESCRIPCION</th>";
    html+="<th>TALLA</th>";
    html+="<th>PRECIO</th>";
    html+="</tr>";

    datos.zapateriaV.map(productos=>{
        html+="<tr>";
        html+="<td>"+productos.folio+"</td>";
        html+="<td>"+productos.descripcion+"</td>";
        html+="<td>"+productos.talla+"</td>";
        html+="<td>"+productos.precio+"</td>";
        html+="</tr>"
    });
    html+="</table>";
    document.getElementById("resultados").innerHTML=html;
};

