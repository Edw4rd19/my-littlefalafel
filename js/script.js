document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Falafel' && password === '20-Agosto') {
		alert ("El 20 de Agosto NO es nuestro aniversario! Perooo ... esta contraseña es algo que solo tu podrias descubrir. Llegaste lejos, puedes comenzar tu viaje.");
        window.location.href = 'bienvenida.html'; // Redirige a la página de construcción
    } else {
        document.getElementById('message').textContent = 'No eres el teniente Falafel? Por favor alejate ';
    }
});

