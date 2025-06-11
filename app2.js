// //ID + informatica
// let url = 'https://geocloud.municipalidadsalta.gob.ar/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public%3Acenso_forestal&maxFeatures=50&outputFormat=application%2Fjson'; // crea una variable con la url de la api
// fetch(url)  //fetch se conecta
//         .then(response => response.json()) //.then, es una promesa= le pide que traiga en formato json toda la info que encuentre
//         .then(data => mostrarData1(data)) // una promesa de mostar los datos bajo la funcion mostrarData. esta con => sino estaria escrita de otra manera
//         .catch(error => console.log(error)) // simpre que hay un .fetch, hay un .catch= captura algun error si es que los hay

// //ahora le decimos que muestre en el HTMl. 
// //primero se "llama a" la variable mostrarData , ya estaba definida arriba.

// var mostrarData1 = (data) => {
//         console.log(data);
//         const features = data.features;
//         let body = ""

//         for (let i = 0; i < features.length; i++) {
//                 const feature = features[i];
//                 const id = feature.id;
//                 const geometry = feature.geometry;
//                 const coordinates = geometry.coordinates;
//                 // const geometry_name = feature.geometry_name;
//                 const nombre = feature.properties.NOMBRE;
//                 console.log(id, coordinates, nombre);
//                 //dentro de la tabla seria este codigo
//                 // body+=`<tr><td>${id}</td>
//                 // <td>${geometry}</td>
//                 // <td>${coordinates}</td>
//                 // <td>${nombre}</td></tr>`
//                 //dentro de un div distinto de la tabla: es el estilo del popus de barrios
//                 body += `<div id='Estilo1'><h3><i>Descripción</i></h3></div>
//                <hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />
//                     <div id='Estilo3a'>
//                        <b> Nombre:  </b>  ${id}  <br>
//                        <b> Tipo: </b> ${nombre} <br>
//                        <b> Coordenadas: </b> ${coordinates} <br>
//                        <hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />
//                     </div>`

//         }

//         document.getElementById('data2').innerHTML = body
// }

// ID + informatica

// URL original del GeoServer
let url = 'https://geocloud.municipalidadsalta.gob.ar/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public%3Acenso_forestal&maxFeatures=50&outputFormat=application%2Fjson';

// Proxy público para evitar el error de CORS (¡solo usar en pruebas!)
let proxy = 'https://cors-anywhere.herokuapp.com/';

// Combinamos proxy + URL original
let finalUrl = proxy + url;

fetch(finalUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }
        return response.json();
    })
    .then(data => mostrarData1(data))
    .catch(error => console.error('Error al obtener los datos:', error));

// Función para mostrar los datos en el HTML
var mostrarData1 = (data) => {
    console.log(data);
    const features = data.features;
    let body = "";

    for (let i = 0; i < features.length; i++) {
        const feature = features[i];
        const id = feature.id;
        const geometry = feature.geometry;
        const coordinates = geometry.coordinates;
        const nombre = feature.properties.NOMBRE;

        console.log(id, coordinates, nombre);

        body += `<div id='Estilo1'><h3><i>Descripción</i></h3></div>
           <hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />
                <div id='Estilo3a'>
                   <b> Nombre:  </b>  ${id}  <br>
                   <b> Tipo: </b> ${nombre} <br>
                   <b> Coordenadas: </b> ${coordinates} <br>
                   <hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />
                </div>`;
    }

    document.getElementById('data2').innerHTML = body;
};
