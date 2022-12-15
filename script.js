async function obtenerDatos(){
    let respuesta = await fetch("https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados")
    let datos = await respuesta.json();
    console.log(datos);

    datos.forEach(element => {

        document.getElementById('table').innerHTML+=`  <tr>
             <td>${element.nombre} ${ element.apellido}</td>
             <td>${element.area}</td>
             <td>${element.domicilio}</td>
             <td><img src="${element.foto}"></td>
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
    nombreCompleto.innerHTML = datos.nombre +" "+ datos.apellido;

    let area = document.createElement("h4");
    area.innerHTML = datos.area;

    let domicilio = document.createElement("h4");
    domicilio.innerHTML = datos.domicilio;

    let imagen = document.createElement("h4");
    imagen.innerHTML = `<img src="${datos.foto}"></img>`

    
    seleccionado.appendChild(nombreCompleto);
    seleccionado.appendChild(area);
    seleccionado.appendChild(domicilio);
    seleccionado.appendChild(imagen);

}

obtenerDatos();