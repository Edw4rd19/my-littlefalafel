// Event listener para el botón de comprobar texto
document.getElementById('checkTextBtn').addEventListener('click', function() {
    var inputText = document.getElementById('textInput').value;
    var correctText = 'Yf ugil ym fu zoyltu koy goypy yf gohxi.';

    if (inputText === correctText) {
        // Muestra un mensaje de éxito
        // Cambia el fondo de pantalla
		window.location.href = 'Nyugi.html';

    }
	else{alert('Esa respuesta no es correcta pero ya estas muuy cerca');}
});


        
