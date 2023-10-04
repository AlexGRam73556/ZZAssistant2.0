function enviarMensajePorWhatsApp() {
    const form = document.getElementById("userForm");
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    
    let selectedUser = null;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedUser = {
                nombre: checkbox.getAttribute("data-nombre"),
                apellido: checkbox.getAttribute("data-apellido"),
                telefono: checkbox.getAttribute("data-telefono"),
            };
        }
    });

    if (selectedUser) {
        // Redirigir al usuario a la vista de plantillas
        window.location.href = "plantillas.html";
        // Almacenar los datos del usuario en el almacenamiento local
        localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
    } else {
        alert("Por favor, selecciona un usuario antes de enviar el mensaje.");
    }
}

document.getElementById('whatsapp-button').addEventListener('click', enviarMensajePorWhatsApp);
