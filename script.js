document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const questionSection = document.getElementById('question');
    const successSection = document.getElementById('success');
    const flowerContainer = document.getElementById('flower-container');

    // Create falling petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const size = Math.random() * 15 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        const duration = Math.random() * 3 + 2;
        petal.style.animationDuration = `${duration}s`;
        
        flowerContainer.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // Interval for petals
    setInterval(createPetal, 300);

    // No button "dodge" logic
    function dodgeButton() {
        const padding = 20;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;
        
        const x = Math.max(padding, Math.random() * maxX);
        const y = Math.max(padding, Math.random() * maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = '1000';
    }

    noBtn.addEventListener('mouseover', dodgeButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent accidental click on touch
        dodgeButton();
    });

    // Envelope logic
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const mainCard = document.getElementById('mainCard');

    envelopeWrapper.addEventListener('click', () => {
        envelopeWrapper.classList.add('open');
        
        setTimeout(() => {
            envelopeWrapper.classList.add('fade-out');
            mainCard.classList.remove('hidden');
        }, 1200);
    });

    // Intensify petals
    function intensifyPetals() {
        for(let i = 0; i < 50; i++) {
            setTimeout(createPetal, i * 50);
        }
    }

    // Yes button logic
    yesBtn.addEventListener('click', () => {
        document.getElementById('intro-content').classList.add('hidden');
        questionSection.classList.add('hidden');
        successSection.classList.remove('hidden');
        
        intensifyPetals();
        createHearts();
    });

    // WhatsApp logic
    const whatsappBtn = document.getElementById('whatsappBtn');
    const myNumber = "59168478866"; // <--- PON TU NÚMERO AQUÍ (con código de país, ej: 591 para Bolivia)
    
    whatsappBtn.addEventListener('click', () => {
        const message = encodeURIComponent("¡SÍ quiero ser tu San Valentín! Nos vemos en Paquis para ese pique");
        window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
    });

    function createHearts() {
        const heartCount = 30;
        for(let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';
                heart.style.transition = 'all 2s ease-out';
                heart.style.zIndex = '100';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
                    heart.style.opacity = '0';
                }, 100);
                
                setTimeout(() => heart.remove(), 2100);
            }, i * 100);
        }
    }
});
