document.addEventListener('DOMContentLoaded', function() {
    // 1. Implementación del Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Evita el comportamiento de salto predeterminado
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Obtiene la altura del navbar fijo
                const navbarHeight = document.getElementById('mainNav').offsetHeight;

                // Calcula la posición para hacer scroll, restando la altura del navbar
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Cierra el menú de Bootstrap en móvil después de hacer clic
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.getElementById('navbarResponsive');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // 2. Manejo del formulario con FormSubmit + Cloudflare Turnstile
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitButton = document.getElementById('btn-submit');

            // Verificar que Turnstile esté completado
            const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');
            if (!turnstileResponse || !turnstileResponse.value) {
                e.preventDefault();
                alert('Por favor, complete la verificación de seguridad (Turnstile).');
                return false;
            }

            // Cambiar el texto del botón mientras se envía
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Enviando...';
            submitButton.disabled = true;

            // FormSubmit maneja el envío y redirección automáticamente
            // El campo _next en el HTML redirige a la página principal
            return true;
        });
    }
});

// Callback cuando Turnstile se completa exitosamente
function onTurnstileSuccess(token) {
    console.log('✅ Turnstile completado exitosamente');
}

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');

    // Redirigir al inicio de la página con scroll suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}