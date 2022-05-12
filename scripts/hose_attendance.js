/* console.log(dataHouse)

let House_statistics_information = {
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

House_statistics_information.republicanos = dataHouse.results[0].members.filter(member => member.party === "R");
House_statistics_information.democratas = dataHouse.results[0].members.filter(member => member.party === "D");
House_statistics_information.independientes = dataHouse.results[0].members.filter(member => member.party === "ID");



function average_votes(promedioVotos, arrayPromedio) {
    promedioVotos = arrayPromedio.reduce((acumulador, member) => {
        return acumulador = acumulador + member.votes_with_party_pct;
    }, 0)
    let porcentaje = (promedioVotos / arrayPromedio.length).toFixed(2);
    return porcentaje;
}
House_statistics_information.promediosVotosRepublicanos = (average_votes(House_statistics_information.promediosVotosRepublicanos, House_statistics_information.republicanos));
House_statistics_information.promediosVotosDemocratas = (average_votes(House_statistics_information.promediosVotosDemocratas, House_statistics_information.democratas));

function createTableHouseGlace(arrayR, arrayD, arrayID) {
    let HoseGlaseTbody = document.getElementById("table-HouseGlance");
    let element1 = document.createElement("tr");
    let element2 = document.createElement("tr");
    let element3 = document.createElement("tr");
    let element4 = document.createElement("tr");
    element1.innerHTML = `<td>Republicanos</td><td>${arrayR.length}</td><td>${House_statistics_information.promediosVotosRepublicanos}%</td>`;
    element2.innerHTML = `<td>Democratas</td><td>${arrayD.length}</td><td>${House_statistics_information.promediosVotosDemocratas}%</td>`;
    element3.innerHTML = `<td>Independientes</td><td>${arrayID.length}</td><td>0%</td>`;
    element4.innerHTML = `<td>Total</td><td>${Number(arrayR.length) + Number(arrayID.length) + Number(arrayD.length)}</td><td></td>`;
    HoseGlaseTbody.appendChild(element1);
    HoseGlaseTbody.appendChild(element2);
    HoseGlaseTbody.appendChild(element3);
    HoseGlaseTbody.appendChild(element4);
}
console.log(createTableHouseGlace(House_statistics_information.republicanos, House_statistics_information.democratas, House_statistics_information.independientes))



//mas masLeales
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

dataHouse.results[0].members.sort((a, b) => (b.missed_votes_pct) - (a.missed_votes_pct));
statistics.leastEngaged = obtenerLeast(dataHouse.results[0].members);
statistics.mostEngaged = obtenerMost(dataHouse.results[0].members);

console.log(statistics.leastEngaged)

let body = document.getElementById("table3")
statistics.leastEngaged.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    body.appendChild(item)


})

let tbody = document.getElementById("table4")
statistics.mostEngaged.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    tbody.appendChild(item)
}) */