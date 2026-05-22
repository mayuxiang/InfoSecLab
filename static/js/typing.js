// Typing Effect for Lab Subtitle
(function() {
    const phrases = [
        'Information Security Research',
        'Artificial Intelligence Innovation',
        'Embodied Intelligence Systems',
        'Post-Quantum Cryptography',
        'Privacy-Preserving Computing',
        'Adversarial Robustness',
        'Autonomous System Safety'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const typingElement = document.getElementById('typing-text');

        if (!typingElement) return;

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing when page loads
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(type, 1000);
    });
})();
