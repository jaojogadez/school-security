const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    alert("Form Enviado!")
    window.location.href = "dashboard.html"
}