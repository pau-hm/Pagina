document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el menú de hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.add('hidden');
            }
        });
    });

    // Lógica para las barras de progreso
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
    }, { threshold: 0.5 }); // Barra 50% visible

    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // Lógica para el formulario de contacto
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
        formMessage.classList.add('hidden');
        
        // Validación del nombre
        if (nameInput.value.trim() === '') {
            document.getElementById('name-error').classList.remove('hidden');
            isValid = false;
        }
        
        // Validación del correo
        const validateEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };
        if (!validateEmail(emailInput.value)) {
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
