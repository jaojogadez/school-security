// Elementos HTML
const navTabs = document.querySelector(".nav-tabs");
const navLinks = document.querySelectorAll(".nav-tabs .nav-link");
let currentTab = "visitantes"; // Define uma aba padrão

// Exporta a aba selecionada
export function getCurrentTab() {
  return currentTab;
}

// Exporta quando é aba alterada e recebe loadTable como argumento 
export function changeTab(callback) {
  navTabs.addEventListener("click", (event) => {
    // Garante que somente a aba será clicada
    if (!event.target.classList.contains("nav-link")) {
      return;
    }
    currentTab = event.target.dataset.value;
    getActiveTab();
    // Executa função loadTable
    if (callback) {
      callback();
    }
  });
}

// Função para marcar a aba selecionada
function getActiveTab() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.value === currentTab) {
      link.classList.add("active");
    }
  });
}
