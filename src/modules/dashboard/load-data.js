document.addEventListener("DOMContentLoaded", () => {
    const $element = document.querySelector("#security-guard-name");
    const name = sessionStorage.getItem("securityGuardName");
    if (name) {
        $element.textContent = name
    }
    else {
        $element.textContent = "Nome não encontrado"
    }
})