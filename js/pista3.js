// Event listener para el botón de comprobar texto
document.getElementById('checkTextBtn').addEventListener('click', function() {
    var inputText = document.getElementById('textInput').value;
    var correctText = 'El amor es la fuerza que mueve el mundo.';

    if (inputText === correctText) {
        // Muestra un mensaje de éxito
        // Cambia el fondo de pantalla
		window.location.href = 'Nyugi.html';

    }
	else{
	alert('[7/7]: Me gusta pensar en el comienzo y lo que nos trajo hasta aqui , en la casualidad perpetua. Me gusta pensar en el camino y en la casualidad que hizo que dos seres se llegaran a amar, como h0y lo hacen. Me gusta pensar en las memorias que se construyeron a tu lado, en las memorias que construimos juntos. Me gusta pensar en el momento que decidiste instalarte en mi, en como comenzaste a recorrer todo. Y es que, alteraste mi mundo, desplazaste mi ego y me diste algo en que creer, alguien a quien amar y por eso hoy no te paro de pensar.')
		alert('Por cierto, no olvidaste el ultimo punto, cierto?');}
});


        
