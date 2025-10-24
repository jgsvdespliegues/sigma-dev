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
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = document.getElementById('btn-submit');
            const originalText = submitButton.innerHTML;

            // Verificar que Turnstile esté completado
            const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');
            if (!turnstileResponse || !turnstileResponse.value) {
                alert('Por favor, complete la verificación de seguridad (Turnstile).');
                return;
            }

            // Cambiar el texto del botón mientras se envía
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Enviando...';
            submitButton.disabled = true;

            try {
                // Enviar el formulario a FormSubmit usando fetch
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Mostrar modal de éxito
                    showModal();

                    // Limpiar el formulario
                    contactForm.reset();

                    // Resetear Turnstile
                    if (window.turnstile) {
                        window.turnstile.reset();
                    }

                    // Restaurar el botón
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                } else {
                    throw new Error('Error al enviar el formulario');
                }
            } catch (error) {
                // En caso de error
                console.error('Error al enviar:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // Resetear Turnstile en caso de error
                if (window.turnstile) {
                    window.turnstile.reset();
                }
            }
        });
    }
});