document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Falafel' && password === '20-Agosto') {
        window.location.href = 'bienvenida.html'; // Redirige a la página de construcción
    } else {
        document.getElementById('message').textContent = 'No eres el teniente Falafel? Por favor alejate ';
    }
});
