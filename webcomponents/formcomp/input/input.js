class MiInput extends HTMLInputElement {
    constructor() {
        super();
        this.addEventListener('keyup', (e) => {
            const tableReg = document.getElementById('datos');
            const busqueda = document.getElementById('busqueda').value.toLowerCase();


            // Recorremos todas las filas con contenido de la tabla
            for (let i = 1; i < tableReg.rows.length; i++) {

                let found = false;
                const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                // Recorremos todas las celdas
                for (let j = 0; j < cellsOfRow.length && !found; j++) {
                    const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (busqueda.length == 0 || compareWith.indexOf(busqueda) > -1) {
                        found = true;
                    }
                }
                if (found) {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }

            // mostramos las coincidencias
            const lastTR = tableReg.rows[tableReg.rows.length - 1];
            const td = lastTR.querySelector("td");
            lastTR.classList.remove("hide", "red");
            if (busqueda == "") {
                lastTR.classList.add("hide");
            }

        });
    }

    static get ceName() {
        return 'mi-input';
    }

    get is() {
        return this.getAttribute('is');
    }

    set is(value) {
        this.setAttribute('is', value || this.ceName);
    }
}


customElements.define(MiInput.ceName, MiInput, { extends: 'input' });

