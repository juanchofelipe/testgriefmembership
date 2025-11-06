
document.addEventListener('DOMContentLoaded', () => {
    // Screen 1: Subscriptions Page
    if (document.title.includes('Suscripciones')) {
        const subscriptionButtons = document.querySelectorAll('button');
        subscriptionButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Comenzar ahora' || buttonText === 'Elegir este plan') {
                button.addEventListener('click', () => {
                    window.location.href = 'register.html';
                });
            }
        });

        const detailsElements = document.querySelectorAll('details');
        detailsElements.forEach(details => {
            details.addEventListener('toggle', () => {
                const summary = details.querySelector('summary');
                const icon = summary.querySelector('.material-symbols-outlined');
                icon.classList.toggle('rotate-180', details.open);
            });
        });
    }

    // Screen 2: User Dashboard
    if (document.title.includes('Panel de Control')) {
        const manageSubscriptionButton = document.querySelectorAll('button');
        if (manageSubscriptionButton) {
            manageSubscriptionButton.forEach(button => {
                const buttonText = button.textContent.trim();
                if(buttonText === 'Gestionar Suscripción'){
                    button.addEventListener('click', () => {
                        window.location.href = 'subscriptions.html';
                    });
                }
            })

        }

        const addBeneficiaryButton = document.querySelector('.cursor-pointer.p-4.rounded-xl');
        if (addBeneficiaryButton) {
            addBeneficiaryButton.addEventListener('click', () => {
                const newBeneficiary = document.createElement('div');
                newBeneficiary.className = 'p-4 rounded-xl shadow-sm bg-white dark:bg-zinc-900/50 flex flex-col items-center text-center';
                newBeneficiary.innerHTML = `
                    <img class="w-20 h-20 rounded-full object-cover mb-4" data-alt="Foto de perfil de Nuevo Beneficiario" src="https://i.pravatar.cc/150?u=a042581f4e29026704d">
                    <p class="text-[#111818] dark:text-white font-semibold">Nuevo Beneficiario</p>
                    <button class="mt-4 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-gray-200 dark:bg-zinc-700 text-[#111818] dark:text-white text-sm font-medium leading-normal hover:bg-gray-300 dark:hover:bg-zinc-600">
                        <span class="truncate">Gestionar</span>
                    </button>
                `;
                const beneficiaryGrid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3');
                beneficiaryGrid.insertBefore(newBeneficiary, addBeneficiaryButton);
            });
        }

        const calendarDays = document.querySelectorAll('.grid.grid-cols-7.gap-2 div:not(.text-gray-400)');
        calendarDays.forEach(day => {
            day.addEventListener('click', () => {
                calendarDays.forEach(d => d.classList.remove('bg-primary', 'text-black'));
                day.classList.add('bg-primary', 'text-black');
            });
        });

        const timeSlots = document.querySelectorAll('.grid.grid-cols-2.gap-4 button:not([disabled])');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', () => {
                timeSlots.forEach(s => s.classList.remove('border-primary', 'bg-primary/20', 'text-primary'));
                slot.classList.add('border-primary', 'bg-primary/20', 'text-primary');
            });
        });

        const confirmButton = document.querySelector('button span.truncate');
        if(confirmButton && confirmButton.textContent.trim() === 'Confirmar Cita'){
             confirmButton.parentElement.addEventListener('click', () => {
                alert('Cita confirmada!');
            });
        }

        const sidebarLinks = document.querySelectorAll('aside a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const linkText = link.querySelector('p').textContent.trim();
                switch (linkText) {
                    case 'Inicio':
                        window.location.href = 'user-dashboard.html';
                        break;
                    case 'Recursos':
                    case 'Comunidad':
                    case 'Mi Perfil':
                        console.log(`Navegando a ${linkText}`);
                        break;
                }
            });
        });
    }

    // Screen 3: Psychologist Profile Page
    if (document.title.includes('Perfil de Psicóloga')) {
        const scheduleButtons = document.querySelectorAll('button');
        scheduleButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Agendar Cita' || buttonText === 'Agenda una Cita') {
                button.addEventListener('click', () => {
                    window.location.href = 'user-dashboard.html#agenda';
                });
            }
        });
    }

    // Screen 4: Admin Dashboard
    if (document.title.includes('Dashboard de Psicóloga')) {
        const viewProfileLinks = document.querySelectorAll('a.text-primary');
        viewProfileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'psychologist-profile.html';
            });
        });

        const calendarDays = document.querySelectorAll('.grid.grid-cols-7.gap-1.mt-2 div:not(.text-gray-400)');
        calendarDays.forEach(day => {
            day.addEventListener('click', () => {
                calendarDays.forEach(d => d.classList.remove('bg-primary/20', 'text-primary'));
                day.classList.add('bg-primary/20', 'text-primary');
            });
        });
    }

    // Screen 5: Registration Page
    if (document.title.includes('Registro y Suscripción')) {
        const actionButtons = document.querySelectorAll('button.w-full');
        actionButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Crear Cuenta y Continuar' || buttonText === 'Suscribirse y Pagar') {
                button.addEventListener('click', () => {
                    window.location.href = 'user-dashboard.html';
                });
            }
        });

        const loginLink = document.querySelector('header a');
        if (loginLink) {
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'login.html';
            });
        }
    }

    // Screen 6: Session Notes Page
    if (document.title.includes('Toma de Notas')) {
        const saveButtons = document.querySelectorAll('main button');
        saveButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Guardar Borrador' || buttonText === 'Guardar y Finalizar') {
                button.addEventListener('click', () => {
                    alert('Nota guardada!');
                });
            }
        });

        const noteLinks = document.querySelectorAll('aside a');
        noteLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const noteTitle = link.querySelector('p').textContent;
                document.querySelector('main .text-3xl').textContent = `Notas de la sesión - ${noteTitle.split(' ').pop()}`;
            });
        });
    }

    // Screen 7: Login Page
    if (document.title.includes('Inicio de Sesión')) {
        const loginButton = document.querySelector('button');
        if (loginButton) {
            loginButton.addEventListener('click', () => {
                const email = document.querySelector('input[type="email"]').value;
                if (email === 'admin@example.com') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'user-dashboard.html';
                }
            });
        }

        const registerLink = document.querySelector('a[href="#"] span.font-bold');
        if (registerLink) {
            registerLink.parentElement.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'register.html';
            });
        }
    }

    // Screen 8: Landing Page
    if (document.title.includes('Apoyo Emocional')) {
        const comienzaButtons = document.querySelectorAll('button');
        comienzaButtons.forEach(button => {
            const buttonText = button.textContent.trim();
            if (buttonText === 'Comienza' || buttonText === 'Comienza tu camino') {
                button.addEventListener('click', () => {
                    window.location.href = 'register.html';
                });
            }
        });
    }
});
