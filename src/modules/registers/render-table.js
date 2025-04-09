import { dados } from "./dados.js";

export function renderTable(currentTab) {
  const tableHeader = document.querySelector("#tableHeader");
  const tableBody = document.querySelector("#tableBody");

  tableHeader.innerHTML = "";
  tableBody.innerHTML = "";

  const registers = dados[currentTab];
  const cols = Object.keys(registers[0]);

  // console.log("Registros: ", registers) // exibe o tamanho do array
  // console.log("Colunas: ", cols) // exibe as propriedades

  renderHeader(cols, tableHeader);
  renderBody(registers, cols, tableBody);
}

function renderHeader(cols, tableHeader) {
  const newTH = document.createElement("th");
  newTH.textContent = "#";
  newTH.setAttribute("scope", "col");
  tableHeader.appendChild(newTH);
  cols.forEach((col) => {
    const th = document.createElement("th");
    th.setAttribute("scope", "col")
    th.textContent = col;
    tableHeader.appendChild(th);
  });
}

function renderBody(registros, colunas, bodyElement) {
  registros.forEach((registro, index) => {
    const tr = document.createElement("tr");

    const thIndex = document.createElement("th");
    thIndex.setAttribute("scope", "row");
    thIndex.textContent = index + 1;
    tr.appendChild(thIndex);

    colunas.forEach((coluna) => {
      const td = document.createElement("td");
      td.textContent = registro[coluna];
      tr.appendChild(td);
    });

    bodyElement.appendChild(tr);
  });
}
