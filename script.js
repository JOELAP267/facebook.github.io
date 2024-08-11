document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const form = event.target;
    
    // Crear un FormData para enviar los datos del formulario
    const formData = new FormData(form);
    
    // Enviar los datos del formulario usando fetch
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Redirigir a Google si la solicitud fue exitosa
            window.location.href = 'https://www.google.com';
        } else {
            alert('Hubo un problema al enviar el formulario.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el formulario.');
    });
});