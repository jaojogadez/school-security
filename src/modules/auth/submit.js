const form = document.querySelector("form");
const username = document.querySelector("#user_name");

form.onsubmit = (event) => {
  event.preventDefault();

  const name = username.value;
  sessionStorage.setItem("securityGuardName", name);

  alert("Form Enviado!");
  window.location.href = "dashboard.html";
};
