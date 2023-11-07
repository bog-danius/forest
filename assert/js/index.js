document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('nameInput').value;
        const email = document.getElementById('emailInput').value;
        console.log('Имя:', name, 'Email:', email);
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
    });
});