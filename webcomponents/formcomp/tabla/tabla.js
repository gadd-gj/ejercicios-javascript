class MiTabla extends HTMLElement {
    constructor() {
        super();
    }


    stations() {
        const req = new XMLHttpRequest();
        const met = 'GET';
        const url = 'https://api.datos.gob.mx/v1/calidadAire';
        const datos = document.getElementById('datos');
        req.addEventListener('load', () => {
            if (req.status === 200) {
                var json = JSON.parse(req.responseText);
                //console.log(json);
                var arr = Object.keys(json).map((key) => json[key])
                var stationsArr = arr[1];
                for (const iterator of stationsArr) {
                    datos.innerHTML += `<tr>
                    <td>`+ iterator.stations[0].id + `</td>
                    <td>`+ iterator.stations[0].name + `</td>
                    <td>`+ iterator.stations[0].indexes[0].value + `</td>
                    <td>`+ iterator.stations[0].location.lon + `</td>
                    <td>`+ iterator.stations[0].location.lat + `</td> </tr>`;
                }
            }
        });
        req.open(met, url, true);
        req.send(null);
    }

}

customElements.define('mi-tabla', MiTabla);

let tabla = new MiTabla();
let tbody = document.createElement('tbody');
document.body.appendChild(tabla);
tabla.appendChild(tbody);
tbody.setAttribute('id', 'datos');
tabla.stations();

