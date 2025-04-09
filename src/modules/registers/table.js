import { getCurrentTab, changeTab } from "./tabs.js";
import { renderTable } from "./render-table.js";

function loadTable() {
  let currentTab = getCurrentTab();
  try {
    switch (currentTab) {
      case "visitantes":
        renderTable(currentTab);
        break;
      case "funcionarios":
        renderTable(currentTab);
        break;
      case "alunos":
        renderTable(currentTab);
        break;
      default:
        // console.log("Aconteceu algum erro.");
        break;
    }
  } catch (error) {
    console.log("Erro");
    alert("Infelizemente não foi possível carregar a tabela.");
  }
}

changeTab(loadTable);
loadTable();
