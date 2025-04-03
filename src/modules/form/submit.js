const form = document.querySelector("form")
alert("A")
form.onsubmit = (event) => {
    event.preventDefault()
    alert("Form Enviado!")
}