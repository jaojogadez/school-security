import { dados } from "./dados.js";
import { getCurrentTab, changeTab } from "./tabs.js";

// const tableHeader = document.querySelector("#tableHeader");
const tableBody = document.querySelector("#tableBody");

function loadTable() {
  let currentTab = getCurrentTab();
  try {
    switch (currentTab) {
      case "Visitantes":
        console.log("Carregar tabela de visitantes");
        break;
      case "Funcionários":
        console.log("Carregar tabela de funcionários");
        break;
      case "Alunos":
        console.log("Carregar tabela de alunos");
        break;
      default:
        console.log("Aconteceu algum erro.");
        break;
    }
  } catch (error) {
    console.log("Erro");
    alert("Infelizemente não foi possível carregar a tabela.");
  }
}

changeTab(loadTable);
loadTable();
