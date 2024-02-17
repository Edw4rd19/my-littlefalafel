document.getElementById('letterImage').addEventListener('click', function() {
    
	var intromessage = document.getElementById('mensajeIntro');
	intromessage.style.display = intromessage.style.display === 'none' ? 'block' : 'none';
	
	var message = document.getElementById('letterMessage');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
});