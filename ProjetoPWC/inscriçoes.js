document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const sexo = document.getElementById('sexo').value;
            const socio = document.getElementById('socio').value;
            const privacy = document.getElementById('privacy').checked;
            
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
                alert('Por favor, preencha o campo Telemóvel');
                return;
            }

            if (!sexo) {
                alert('Por favor, selecione o Sexo');
                return;
            }

            if (!socio) {
                alert('Por favor, selecione se é sócio Go Gym');
                return;
            }

            if (!privacy) {
                alert('Por favor, aceite a Política de Privacidade');
                return;
            }
            
            // Show success message
            showSuccessModal(nome);
            
            // Reset form
            setTimeout(() => {
                form.reset();
            }, 2000);
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Success modal
    function showSuccessModal(nome) {
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
            <div class="success-modal-content">
                <div class="success-icon">✓</div>
                <h3>Bem-vindo, ${nome}!</h3>
                <p>Inscrição concluída com sucesso!</p>
                <p class="success-message">Verificaremos a sua inscrição e entraremos em contacto em breve.</p>
                <button class="close-modal">Fechar</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close button
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', function() {
            modal.remove();
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 5000);
    }
});
