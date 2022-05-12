//datahouse

console.log(dataHouse)
const bodytablehouse = document.getElementById("table-house");

var indexhome = dataHouse.results.forEach(memberhose => {
  let membershouse = memberhose
  let reshouse = membershouse.members

  reshouse.forEach(memberhouse => {
    let finalhose = memberhouse
    let fileHouse = document.createElement("tr");
    fileHouse.innerHTML = `<td><a href="${memberhouse.url}">${memberhouse.first_name} ${memberhouse.middle_name || ""} ${memberhouse.last_name}</td><td>${finalhose.party}</td><td>${finalhose.state}</td><td>${finalhose.seniority}</td><td>${finalhose.votes_with_party_pct + "%"}</td>`
    bodytablehouse.appendChild(fileHouse)
  })
});

function filtrarPorPartido(array, partido) {
  let table = document.getElementById("table-house");
  table.innerHTML = '';
  let filtro = array.results[0].members.filter(miembro => miembro.party === partido)
  filtro.forEach(miembro => {
    let item = document.createElement("tr")
    item.innerHTML = `<td><a href="${miembro.url}">${miembro.first_name}-${miembro.last_name}<a></td><td>${miembro.party}</td><td>${miembro.state}</td><td>${miembro.seniority}</td><td>${miembro.votes_with_party_pct}</td>`
    table.appendChild(item)

  })
}



function filtrarPorEstado(array, estado) {
  let table = document.getElementById("table-house");
  table.innerHTML = '';
  let filtro = array.results[0].members.filter(miembro => miembro.state === estado)
  filtro.forEach(miembro => {
    let item = document.createElement("tr")
    item.innerHTML = `<td><a href="${miembro.url}">${miembro.first_name}-${miembro.last_name}</a></td><td>${miembro.party}</td><td>${miembro.state}</td><td>${miembro.seniority}</td><td>${miembro.votes_with_party_pct}</td>`
    table.appendChild(item)

  })
}

//escuchadores de eventos
//
let formulariosFiltros = document.getElementById("form-filtros");

formulariosFiltros.addEventListener("change", e => {
  console.log(e)
  let checkbox = formulariosFiltros.querySelectorAll("[type='checkbox']")
  let checkeados = array.from(checkbox).filter(checkbox => checkbox.checked)
  let seleccionarPartidos = checkeados.map(checkbox => checkbox.value)
  let seleccionarEstados = stateSelect.value;
  console.log(seleccionarEstados)
  let filtroMiembros = filtrarPorEstadoPartido(dataHouse, seleccionarPartidos, seleccionarEstados)

  crearTabla(filtroMiembros)
})

function filtroPorEstadoPartido(array, estado, partido) {
  let filtro = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].state === estado || "all") {
      if (partido.includes(array[i].party)) {
        filtro.push(array[i])
      }
    }
  }
  return filtro
}

document.getElementById('btncheck1').onclick = function () {
  filtrarPorPartido(dataHouse, "R")
}
document.getElementById('btncheck2').onclick = function () {
  filtrarPorPartido(dataHouse, "D")
}
document.getElementById('btncheck3').onclick = function () {
  filtrarPorPartido(dataHouse, "ID")
}


const opciones = document.getElementById("stateSelect")
opciones.addEventListener("change", e => {
  if (e.target.value === "") {
    /* crearTabla(dataHouse) */
  } else {
    filtrarPorEstado(dataHouse, e.target.value)
  }

})

//globalfilter
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