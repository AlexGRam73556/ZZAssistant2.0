document.getElementById('send-button').addEventListener('click', enviarMensaje);

function enviarMensaje() {
    const templateForm = document.getElementById("templateForm");
    const selectedTemplate = templateForm.querySelector('input[type="radio"]:checked');

    if (selectedTemplate) {
        // Obtener los datos del usuario almacenados en el almacenamiento local
        const selectedUser = JSON.parse(localStorage.getItem("selectedUser"));
        if (selectedUser) {
            const template = selectedTemplate.value;
            const message = `${template} - Nombre: ${selectedUser.nombre} ${selectedUser.apellido}, Teléfono: ${selectedUser.telefono}`;
            const whatsappURL = `https://wa.me/${selectedUser.telefono}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        } else {
            alert("No se encontraron datos de usuario.");
        }
    } else {
        alert("Por favor, selecciona una plantilla de mensaje antes de enviar.");
    }
}
