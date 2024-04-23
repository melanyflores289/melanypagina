document.addEventListener('DOMContentLoaded'), function () {
    function handleFormSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('nombre').value;
        const email = document.getElementById('correo').value;
        const message = document.getElementById('mensaje').value;
        alert('Mensaje enviado con éxito'); 
    }
}