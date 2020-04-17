

$('#loginForma').submit(function(event) {
	event.preventDefault();
	let korIme = $('#username').val();
	let loz = $('#password').val();
	
	if(!korIme || !loz) {
		if(!korIme) {
			$('#username').css('border-color', 'red');
			$('#korisnickoImeValidacija').css('visibility', 'visible');
			$('#korisnickoImeValidacija').css('display', 'block');	
			}
		if(!loz) {
			$('#password').css('border-color','red');
			$('#lozinkaValidacija').css('visibility', 'visible');
			$('#lozinkaValidacija').css('display', 'block');
		}
		
		$('#sveukupnaValidacija').css('visibility', 'visible');
	    $('#sveukupnaValidacija').css('display', 'block');
	}
	else 
	{
		
	
	
	$.post({
		url: 'rest/login',
		data: JSON.stringify({korisnickoIme: korIme, lozinka: loz}),
		contentType: 'application/json',
		success: function(data) {
			if (data != null) {
				window.location = 'homeloggedin.html';
			}
			else {
				$('#sveukupnaValidacija').css('visibility', 'visible');
			    $('#sveukupnaValidacija').css('display', 'block');
			}
		},
		error: function() {
			$('#sveukupnaValidacija').css('visibility', 'visible');
		    $('#sveukupnaValidacija').css('display', 'block'); ;
		}
	})
	}
});

var defaultBorderColor;
defaultBorderColor = $('#username').css('border-color')

$('#username').change(function(event){
	event.preventDefault();
	$('#sveukupnaValidacija').css('visibility', 'hidden');
    $('#sveukupnaValidacija').css('display', 'none');
	if($('#username').val()){
		$('#username').css('border-color', defaultBorderColor);
		$('#korisnickoImeValidacija').css('visibility', 'hidden');
		$('#korisnickoImeValidacija').css('display', 'none');
	}
	else{
		$('#username').css('border-color', 'red');
		$('#korisnickoImeValidacija').css('visibility', 'visible');
		$('#korisnickoImeValidacija').css('display', 'block');
	}
})

$('#password').change(function(event){
	event.preventDefault();
	$('#sveukupnaValidacija').css('visibility', 'hidden');
    $('#sveukupnaValidacija').css('display', 'none');
	if($('#password').val()){
		$('#password').css('border-color', defaultBorderColor);
		$('#lozinkaValidacija').css('visibility', 'hidden');
		$('#lozinkaValidacija').css('display', 'none');
	}
	else{
		$('#password').css('border-color', 'red');
		$('#lozinkaValidacija').css('visibility', 'visible');
		$('#lozinkaValidacija').css('display', 'block');
	}
})