/* 
console.log(dataHouse)

let statistics = {
    "qtyTotal": "",
    "leastLoyal": [],
    "mostLoyal": [],

}
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
dataHouse.results[0].members.sort((a, b) => (a.votes_with_party_pct) - (b.votes_with_party_pct))
statistics.leastLoyal = obtenerLeast(dataHouse.results[0].members);
statistics.mostLoyal = obtenerMost(dataHouse.results[0].members);;

console.log(statistics.leastLoyal)

let body = document.getElementById("tableA")
statistics.leastLoyal.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    body.appendChild(item)


})

let tbody = document.getElementById("tableB")
statistics.mostLoyal.forEach((miembros) => {
    let item = document.createElement("tr")
    item.innerHTML = `<td>${miembros.first_name}-${miembros.last_name}</td><td>${miembros.missed_votes}</td><td>${miembros.missed_votes_pct}</td>`
    tbody.appendChild(item)
}) */