document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form-card form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const checkbox = document.querySelector('input[name="contato-equipa"]').checked;
            
            // Basic validation
            if (!nome) {
                alert('Por favor, preencha o campo Nome');
                return;
            }
            
            if (!email || !isValidEmail(email)) {
                alert('Por favor, preencha um email válido');
                return;
            }
            
            if (!telefone) {
                alert('Por favor, preencha o campo Telefone');
                return;
            }

            if (!mensagem) {
                alert('Por favor, escreva uma mensagem');
                return;
            }
            
            // Submit success message
            const button = form.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Mensagem enviada com sucesso!';
            button.style.background = '#4caf50';
            button.disabled = true;
            
            // Reset form
            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.background = '#111111';
                button.disabled = false;
            }, 3000);
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
