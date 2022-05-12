//senate
console.log(datos)
const bodytable = document.getElementById("table-senate");

var inicio = datos.results.forEach(member => {
  let members = member
  let respuesta = members.members

  respuesta.forEach(miembro => {
    let final = miembro
    let file = document.createElement("tr");
    file.innerHTML = `<td><a href="${miembro.url}">${miembro.first_name} ${miembro.middle_name || ""} ${miembro.last_name}</td><td>${final.party}</td><td>${final.state}</td><td>${final.seniority}</td><td>${final.votes_with_party_pct + "%"}</td>`
    bodytable.appendChild(file)
  })
});

function filtrarPorPartido(datos, partido) {
  let table = document.getElementById("table-senate");
  table.innerHTML = '';
  let filtro = datos.results[0].members.filter(miembro => miembro.party === partido)
  filtro.forEach(miembro => {
    let item = document.createElement("tr")
    item.innerHTML = `<td><a href="${miembro.url}">${miembro.first_name}-${miembro.last_name}<a></td><td>${miembro.party}</td><td>${miembro.state}</td><td>${miembro.seniority}</td><td>${miembro.votes_with_party_pct}</td>`
    table.appendChild(item)

  })
}



function filtrarPorEstado(datos, estado) {
  let table = document.getElementById("table-senate");
  table.innerHTML = '';
  let filtro = datos.results[0].members.filter(miembro => miembro.state === estado)
  filtro.forEach(miembro => {
    let item = document.createElement("tr")
    item.innerHTML = `<td><a href="${miembro.url}">${miembro.first_name}-${miembro.last_name}</a></td><td>${miembro.party}</td><td>${miembro.state}</td><td>${miembro.seniority}</td><td>${miembro.votes_with_party_pct}</td>`
    table.appendChild(item)

  })
}

//escuchadores de eventos
//
let formulariosFiltros = document.getElementById("form- filtros");

formulariosFiltros.addEventListener("change", e => {
  console.log(e)
  let checkbox = formulariosFiltros.querySelectorAll("[type='checkbox']")
  let checkeados = datos.from(checkbox).filter(checkbox => checkbox.checked)
  let seleccionarPartidos = checkeados.map(checkbox => checkbox.value)
  let seleccionarEstados = stateSelect.value;
  console.log(seleccionarEstados)
  let filtroMiembros = filtrarPorEstadoPartido(datos, seleccionarPartidos, seleccionarEstados)

  crearTabla(filtroMiembros)
})

function filtroPorEstadoPartido(datos, estado, partido) {
  let filtro = [];
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].state === estado || "all") {
      if (partido.includes(datos[i].party)) {
        filtro.push(datos[i])
      }
    }
  }
  return filtro
}

document.getElementById('btncheck1').onclick = function () {
  filtrarPorPartido(datos, "R")
}
document.getElementById('btncheck2').onclick = function () {
  filtrarPorPartido(datos, "D")
}
document.getElementById('btncheck3').onclick = function () {
  filtrarPorPartido(datos, "ID")
}


const opciones = document.getElementById("stateSelect")
opciones.addEventListener("change", e => {
  if (e.target.value === "") {
    crearTabla(datos)
  } else {
    filtrarPorEstado(datos, e.target.value)
  }

})

const busqueda = document.getElementById('seach');
const table = document.getElementById("table1").tBodies[0];

let buscaTabla = function () {
  let texto = busqueda.value.toLowerCase();
  let r = 0;
  while (row = table.rows[r++]) {
    if (row.innerText.toLowerCase().indexOf(texto) !== -1)
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda.addEventListener('keyup', buscaTabla);