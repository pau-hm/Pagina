document.addEventListener('DOMContentLoaded', () => {
    // Animación de las barras de progreso
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 }); // Inicia la animación cuando la barra es 50% visible

    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // Lógica del menú de hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        // Limpiar mensajes de error
        document.getElementById('name-error').classList.add('hidden');
        document.getElementById('email-error').classList.add('hidden');
        document.getElementById('message-error').classList.add('hidden');
        
        // Validación del nombre
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').classList.remove('hidden');
            isValid = false;
        }
        
        // Validación del correo
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            document.getElementById('email-error').classList.remove('hidden');
            isValid = false;
        }
        
        // Validación del mensaje
        if (messageInput.value.trim() === '') {
            document.getElementById('message-error').classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            // Simular envío de formulario
            console.log('Formulario enviado:', {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            });
            
            formMessage.classList.remove('hidden');
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }
    });
});
