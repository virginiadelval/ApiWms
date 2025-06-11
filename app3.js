//genero una funcion con async  ejemplo tomado de https://www.youtube.com/watch?v=nZaZ2dB6pow&t=374s
// Crea una función para agregar marcadores al mapa

const api_url =
  "https://geocloud.municipalidadsalta.gob.ar/geoserver/public/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=public%3Acenso_forestal&maxFeatures=50&outputFormat=application%2Fjson"; // crea una variable con la url de la api

async function getData() {
  const response = await fetch(api_url); //fetch se conecta a la url
  const data = await response.json(); // trae el dato en formato json para ser leido
  const features = data.features;
  const points = []; // genera la variable un layer con todos los puntos

  for (let i = 0; i < features.length; i++) {   //genera una iteraccion por cada elemento que lee y genera una const para cada uno de los dato que quiero traer
    const feature = features[i];
    const geometry = feature.geometry;
    const coordinates = geometry.coordinates;
    const lat1 = coordinates[0];
    const long = coordinates[1];
    const nombre = feature.properties.NOMBRE;
    const tipo = feature.properties.TIPO;
    const idFeature = feature.id;
    //   const point = [long, lat1];

    // muestro por consola los datos
    // console.log( geometry, lat1, long, nombre,
    //     //  point
    //      );

    // Crea un objeto point con las propiedades de longitud y latitud para que se vea en el mapa y luego las caracteristicas que quiero nombre
    const point = {
      longitud: long,
      latitud: lat1,
      especie: nombre,
      tipo: tipo,
      idN: idFeature

    };
    console.log(point);
    // Agrega el punto al array points
    points.push(point);
  }

  console.log(points);
  // Llamar a la función addMarkers() para agregar marcadores al mapa
  addMarkers(points);
}

const addMarkers = (points) => {
  points.forEach((point) => {
    //creo la variable marker (punto) con los datos de lat/long traido anterioremente
    const marker = L.marker([point.longitud, point.latitud]); /// al marker le asigno la porpoiedad de lat y long porque sino no aparece en el mapa. Luego le agrego las demas caracteristicas que
    marker
      .bindPopup(
        `<div id='Estilo1'><h3><i>Datos del Arbolado Urbano</i></h3></div>
        <hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />
        <div id='Estilo3a'>
        <b>ID:</b> ${point.idN}<br>
        <b>Longitud:</b> ${point.longitud}<br>
        <b>Latitud:</b> ${point.latitud}<br>
        <b>Nombre:</b> ${point.especie}<br>
        <b>Tipo :</b> ${point.tipo}<br>
        <div align='center'>  <b> Imagen : <i>(se inserta img alineada) </i>  <img src=dist/images/logo_inspeccion_min.png height=70px width=auto opacity: 0.5/> </div> <br>
        <b> Imagen : <i>(se inserta img sin alinear) </i>   <figure><img class='imgpop' src=feature.properties.data_foto></figure>
        </div>
      `
      )
      .addTo(map);
  });
};
getData();

