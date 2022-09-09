/** 
 * 
 * Tabla con javascript en un documento HTML que presente los datos.
 * 
 * 
*/


var personaArr = [
    {
        "personId": 123,
        "name": "John",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sidney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
];

const datos = document.getElementById("datos");

(() => {
    for (let i = 0; i < personaArr.length; i++) {
        datos.innerHTML += `<tr>
        <td>`+ personaArr[i].personId + `</td>
        <td>`+ personaArr[i].name + `</td>
        <td>`+ personaArr[i].city + `</td>
        <td>`+ personaArr[i].phoneNo + `</td> </tr>`;
    }
})()






