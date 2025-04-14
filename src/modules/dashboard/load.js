import { createChart } from "./chart.js";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#sidebar").classList.add("expand");
  loadPage("overview");
});

// Função para carregar dinamicamente as pages na tela
const $mainContent = document.getElementById("main-content");

async function loadPage(pageName) {
  try {
    const response = await fetch(`./src/pages/${pageName}.html`);

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const html = await response.text();
    $mainContent.innerHTML = html;

    if (pageName == "overview") {
      createChart()
    }

  } catch (error) {
    console.log(error);
    const errorMessage = `
      <div class="alert alert-danger">Erro ao carregar a página: ${error}</div>
    `;
    $mainContent.innerHTML = errorMessage;
  }
}

// Função para adicionar o evento de click aos item do sidebar
const $links = document.querySelectorAll(".sidebar-link");

$links.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();

    $links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const page = link.dataset.value.trim();
    if (page) {
      loadPage(page);
    }
  };
});
