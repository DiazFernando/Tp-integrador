async function obtenerDatos(){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    let datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td>${element.nombre} ${ element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><button class="ver" id="${element.id}">Ver</button></td>
             </tr>`      
    
   });

   let btn = document.querySelectorAll(".ver");
   btn.forEach(item => {
    item.addEventListener('click', (e) => {
        mostrarUno(e.target.id);
    });
   })

} 

async function mostrarUno(id){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+id)
    let datos = await respuesta.json();
    console.log(datos);

    let empleado = document.getElementById("seleccionado");
    empleado.innerHTML = "";
    let nombreCompleto = document.createElement("h4");
    nombreCompleto.innerHTML ="Nombre y Apellido: " + datos.nombre +" "+ datos.apellido;

    let area = document.createElement("h4");
    area.innerHTML = "Area: " + datos.area;

    let domicilio = document.createElement("h4");
    domicilio.innerHTML = "Domicilio: " + datos.domicilio;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`

    
    empleado.appendChild(nombreCompleto);
    empleado.appendChild(area);
    empleado.appendChild(domicilio);
    empleado.appendChild(imagen);

}

let misDatos ={
    "nombre":"Fernando",
    "apellido":"Diaz",
    "area":"Developer",
    "domicilio":"Los Arrieros 88, Ushuaia",
    "foto":"https://www.cronista.com/files/image/495/495493/6393c9fe5226c.jpg",
    "id":"90"
}

async function modificarDatos(datos) {

    const res = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados/"+datos.id, {
        method: "PUT",
        body:JSON.stringify(datos),
        headers:{"Content-type":"application/json"}
    });
    const data = await res.json();
        console.log(data);
}



obtenerDatos();
modificarDatos(misDatos);