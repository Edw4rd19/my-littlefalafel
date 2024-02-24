// Event listener para el botón de comprobar texto
document.getElementById('checkTextBtn').addEventListener('click', function() {
    var inputText = document.getElementById('textInput').value;
    var correctText = '5966207567696C20796D206675207A6F796C7475206B6F7920676F79707920796620676F6878692E';

    if (inputText === correctText) {
        // Muestra un mensaje de éxito
        // Cambia el fondo de pantalla
		window.location.href = '7032.html';
        //document.body.style.backgroundImage = "url('css/vangogh2.jpeg')";

    }
	else{alert('[6/7]: Intentaste todo en mayusculas? Esa respuesta no es correcta pero ya estas muuy cerca');}
});


        
