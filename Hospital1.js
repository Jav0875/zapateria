//JavaScript Document
var datos={};
var misDatos=function(info){
    console.log(info);
    datos.pacientes=info.pacientes;
    datos.medicamentos=info.medicamentos;
//Funcion de ver pacientes
    function verPacientes(){
        if(!datos.pacientes){
            console.log("Paciente no se encuentran");
            return;
        }
        var html="";
    
        html+="<table border='2' align='center'>";
        html+="<tr>";
        html+="<th>ID Paciente</th>";
        html+="<th>Nombre</th>";
        html+="<th>Apellido paterno</th>";
        html+="<th>Apellido materno</th>";
        html+="<th>Edad</th>";
        html+="<th>Fecha de alta</th>";
        html+="<th>Diagnostico</th>";
        html+="<th>Próxima cita</th>";
        html+="</tr>";
    
        datos.pacientes.map(paciente=>{
           html+="<tr>";
           html+="<td>"+paciente.id_paciente+"</td>";
           if(paciente.nombre){
            html+="<td>"+paciente.nombre.nombrep+"</td>";
            html+="<td>"+paciente.nombre.apellidop+"</td>";
            html+="<td>"+paciente.nombre.apellidom+"</td>";
           }
           else{
            html+="<td colspan='4'>Paciente no se encuentra</td>"; 
           }
           html+="<td>"+paciente.edad+"</td>";
           html+="<td>"+paciente.fecha_alta+"</td>";
           html+="<td>"+paciente.diagnostico+"</td>";
           html+="<td>"+paciente.fecha_cita+"</td>";      
           html+="</tr>";
        }); 
        html+="</table>";
        document.getElementById("resultados").innerHTML=html;//Muestra los nombres de los pacientes
    }    
//Funcion de ver medicamentos 
function verMedicamentos(){
    if(!datos.medicamentos){
        console.log("Medicina no se encuentran");
        return;
    }
    var html2="";

    html2+="<table border='2' align='center'>";
    html2+="<tr>";
    html2+="<th>Clave</th>";
    html2+="<th>Nombre</th>";
    html2+="<th>Vía de administración</th>";
    html2+="<th>Dosis</th>";
    html2+="<th>Contenido neto</th>";
    html2+="<th>Fecha de caducidad</th>";
    html2+="</tr>";

    datos.medicamentos.map(medicina=>{
       html2+="<tr>";
       html2+="<td>"+medicina.clave+"</td>";
       html2+="<td>"+medicina.nombre+"</td>";
       html2+="<td>"+medicina.via_ad+"</td>";
       html2+="<td>"+medicina.dosis+"</td>";
       html2+="<td>"+medicina.cont_net+"</td>";
       html2+="<td>"+medicina.fech_cad+"</td>";      
       html2+="</tr>";
    }); 
    html2+="</table>";
    document.getElementById("medicamentos").innerHTML=html2;//Muestra los datos de los medicamentos
} 
document.getElementById("pacientes").onclick=verPacientes;
document.getElementById("medicamento").onclick=verMedicamentos;
};