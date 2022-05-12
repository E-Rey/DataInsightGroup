/* console.log(datos)
let senate_statistics_information = {
    republicanos: [],
    democratas: [],
    independientes: [],
    promediosVotosDemocratas: 0,
    promediosVotosRepublicanos: 0,

}


let statistics = {
    "qtyTotal": "",
    "leastLoyal": [],
    "mostLoyal": [],

}
senate_statistics_information.republicanos = datos.results[0].members.filter(member => member.party === "R");
senate_statistics_information.democratas = datos.results[0].members.filter(member => member.party === "D");
senate_statistics_information.independientes = datos.results[0].members.filter(member => member.party === "ID");


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


 */


//tablas
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

datos.results[0].members.sort((a, b) => (a.votes_with_party_pct) - (b.votes_with_party_pct))
statistics.leastLoyal = obtenerLeast(datos.results[0].members);
statistics.mostLoyal = obtenerMost(datos.results[0].members);;

console.log(statistics.leastLoyal)

let body = document.getElementById("tableA")
statistics.leastLoyal.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    body.appendChild(item)
    //crearTablaMostAndLeast("leastEngaged",statistics.leastEngaged,[["first_name+last_name",{"link":"true"}],"missed_votes","missed_votes_pct"]);
    //crearTablaLeast("tableta",statistics.mostEngaged,[])
    //console.log(statistics.mostEngaged)

})

let tbody = document.getElementById("tableB")
statistics.mostLoyal.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    tbody.appendChild(item)
})