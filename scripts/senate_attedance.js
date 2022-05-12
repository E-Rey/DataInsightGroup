console.log(datos)

let senate_statistics_information = {
    republicanos: [],
    democratas: [],
    independientes: [],
    promediosVotosDemocratas: 0,
    promediosVotosRepublicanos: 0,

}

let statistics = {
    "qtyTotal": "",

    "leastEngaged": [],
    "mostEngaged": []
}

// contador de  cantidad de miembros no-homo
senate_statistics_information.republicanos = datos.results[0].members.filter(member => member.party === "R");
senate_statistics_information.democratas = datos.results[0].members.filter(member => member.party === "D");
senate_statistics_information.independientes = datos.results[0].members.filter(member => member.party === "ID");

//calculadora de promedio de votos 

function promedio(promedioVotos, arrayPromedio) {
    promedioVotos = arrayPromedio.reduce((acumulador, member) => {
        return acumulador = acumulador + member.votes_with_party_pct;
    }, 0)
    let porcentaje = (promedioVotos / arrayPromedio.length).toFixed(2);
    return porcentaje;
}
senate_statistics_information.promediosVotosRepublicanos = (promedio(senate_statistics_information.promediosVotosRepublicanos, senate_statistics_information.republicanos));
senate_statistics_information.promediosVotosDemocratas = (promedio(senate_statistics_information.promediosVotosDemocratas, senate_statistics_information.democratas));

//creador de


function crearTablaSenateGlace(arrayR, arrayD, arrayID) {
    let tablebody = document.getElementById("table-senateGlance");
    let item1 = document.createElement("tr");
    let item2 = document.createElement("tr");
    let item3 = document.createElement("tr");
    let item4 = document.createElement("tr");
    item1.innerHTML = `<td>Republicanos</td><td>${arrayR.length}</td><td>${senate_statistics_information.promediosVotosRepublicanos}%</td>`;
    item2.innerHTML = `<td>Democratas</td><td>${arrayD.length}</td><td>${senate_statistics_information.promediosVotosDemocratas}%</td>`;
    item3.innerHTML = `<td>Independientes</td><td>${arrayID.length}</td><td>0%</td>`;
    item4.innerHTML = `<td>Total</td><td>${Number(arrayR.length) + Number(arrayID.length) + Number(arrayD.length)}</td><td>${Number(senate_statistics_information.promediosVotosRepublicanos) + Number(senate_statistics_information.promediosVotosDemocratas) / 2}</td>`;
    tablebody.appendChild(item1);
    tablebody.appendChild(item2);
    tablebody.appendChild(item3);
    tablebody.appendChild(item4);
}
console.log(crearTablaSenateGlace(senate_statistics_information.republicanos, senate_statistics_information.democratas, senate_statistics_information.independientes))

/* function crearHouseaGlance(arrayR, arrayD, arrayID) {
    let tablebodyhouse = document.getElementById("table-HouseGlance");
    let item11 = document.createElement("tr");
    let item22 = document.createElement("tr");
    let item33 = document.createElement("tr");
    let item44 = document.createElement("tr");
    item11.innerHTML = `<td>Republicanos</td><td>${arrayR.length}</td><td>${senate_statistics_information.promediosVotosRepublicanos}%</td>`;
    item22.innerHTML = `<td>Democratas</td><td>${arrayD.length}</td><td>${senate_statistics_information.promediosVotosDemocratas}%</td>`;
    item33.innerHTML = `<td>Independientes</td><td>${arrayID.length}</td><td>0%</td>`;
    item44.innerHTML = `<td>Total</td><td>${Number(arrayR.length)+Number(arrayID.length)+Number(arrayD.length)}</td><td>${Number(senate_statistics_information.promediosVotosRepublicanos) + Number(senate_statistics_information.promediosVotosDemocratas) / 2}</td>`;
    tablebodyhouse.appendChild(item1);
    tablebodyhouse.appendChild(item2);
    tablebodyhouse.appendChild(item3);
    tablebodyhouse.appendChild(item4);
}

console.log(crearHouseaGlance(senate_statistics_information.republicanos, senate_statistics_information.democratas, senate_statistics_information.independientes))
 */

//menor asistencia
function obtenerLeast(datosOrdenados) {

    let qty = datosOrdenados.length * 0.1;

    let least = [];

    for (let i = 0; i < qty; i++) { least.push(datosOrdenados[i]); }

    return least;

}
function obtenerMost(datosOrdenados) {
    let qty = datosOrdenados.length * 0.1;
    let most = [];
    for (let i = datosOrdenados.length - 1; i > datosOrdenados.length - 1 - qty; i--) { most.push(datosOrdenados[i]); }
    return most;
}

datos.results[0].members.sort((a, b) => (b.missed_votes_pct) - (a.missed_votes_pct));
statistics.leastEngaged = obtenerLeast(datos.results[0].members);
statistics.mostEngaged = obtenerMost(datos.results[0].members);

console.log(statistics.leastEngaged)

let body = document.getElementById("table-senate3")
statistics.leastEngaged.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    body.appendChild(item)


})

let tbody = document.getElementById("table-senate4")
statistics.mostEngaged.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    tbody.appendChild(item)
})