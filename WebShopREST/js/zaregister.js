var defaultBorderColor;
defaultBorderColor = $('#regUserName').css('border-color')

$('#registerForma').submit(function(event){
	event.preventDefault() ;
	
	let korIme = $('#regUserName').val();
	let lozinka = $('#regPassword').val();
	let ime = $('#regName').val();
	let prezime	= $('#regSurname').val();
	let uloga = "KUPAC";
	let telefon = $('#regTelephone').val();
	let grad = $('#regCity').val();
	let email = $('#regMail').val();
	let datum = new Date() ;
	let d = datum.toDateString() ;
	
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if($('#regPasswordRepeat').val().localeCompare($('#regPassword').val())==0)
	{
		$('#regPasswordRepeat').css('border-color', defaultBorderColor);
		$('#regPasswordRepeatValidation').css('visibility', 'hidden');
		$('#regPasswordRepeatValidation').css('display', 'none');
	}
	else{
		$('#regPasswordRepeat').css('border-color', 'red');
		$('#regPasswordRepeatValidation').css('visibility', 'visible');
		$('#regPasswordRepeatValidation').css('display', 'block');
	}
	
	if($('#regMail').val().match(mailformat))
	{
		$('#regMail').css('border-color', defaultBorderColor);
		$('#regMailValidation').css('visibility', 'hidden');
		$('#regMailValidation').css('display', 'none');
	}
	else{
		$('#regMail').css('border-color', 'red');
		$('#regMailValidation').css('visibility', 'visible');
		$('#regMailValidation').css('display', 'block');
	}
	
	if(!ime || !prezime || !korIme || !lozinka || !email || $('#regPasswordRepeat').val().localeCompare($('#regPassword').val())!=0 || !$('#regMail').val().match(mailformat))
	{
		if(!ime){
			$('#regName').css('border-color', 'red');
		}
	
		if(!prezime){
			$('#regSurname').css('border-color', 'red');
		}
	
		if(!korIme){
			$('#regUsername').css('border-color', 'red');
		}
		
		if(!lozinka){
			$('#regPassword').css('border-color', 'red');
		}
	
		if(!email){
			$('#regMail').css('border-color', 'red');
		}	
		
		$('#regValidation').css('visibility', 'visible');
		$('#regValidation').css('display', 'block');
	}
	else {
	
	$.post({
		url: 'rest/registracija',
		data: JSON.stringify({
			korisnickoIme: korIme,
			lozinka: lozinka,
			ime: ime, 
			prezime: prezime,
			uloga: uloga,
			telefon: telefon,
			grad: grad,
			email: email,
			datumReg: d
		
		}),
		contentType: 'application/json',
		success: function(data) {
			if(data != null){
				window.location = 'homepage.html' ;
				alert("Uspesna registracija.");
			}
			else {
				$('#regValidation').css('visibility', 'visible');
				$('#regValidation').css('display', 'block');
			}
		},
		error: function() {
			$('#regValidation').css('visibility', 'visible');
			$('#regValidation').css('display', 'block');
		}
	});
	}
	
});

$('#regName').change(function(event){
	event.preventDefault();
	if($('#regName').val())
	{
		$('#regName').css('border-color', defaultBorderColor);
	}
	else{
		$('#regName').css('border-color', 'red');
	}
})

$('#regSurname').change(function(event){
	event.preventDefault();
	if($('#regSurname').val())
	{
		$('#regSurname').css('border-color', defaultBorderColor);
	}
	else{
		$('#regSurname').css('border-color', 'red');
	}
})

$('#regUsername').change(function(event){
	event.preventDefault();
	if($('#regUsername').val())
	{
		$('#regUsername').css('border-color', defaultBorderColor);
	}
	else{
		$('#regUsername').css('border-color', 'red');
	}
})

$('#regPassword').change(function(event){
	event.preventDefault();
	if($('#regPassword').val())
	{
		$('#regPassword').css('border-color', defaultBorderColor);
	}
	else{
		$('#regPassword').css('border-color', 'red');
	}
})

$('#regPasswordRepeat').change(function(event){
	event.preventDefault();
	if($('#regPasswordRepeat').val())
	{
		$('#regPasswordRepeat').css('border-color', defaultBorderColor);
	}
	else{
		$('#regPasswordRepeat').css('border-color', 'red');
	}
})

$('#regMail').change(function(event){
	event.preventDefault();
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if($('#regMail').val().match(mailformat))
	{
		$('#regMail').css('border-color', defaultBorderColor);
		$('#regMailValidation').css('visibility', 'hidden');
		$('#regMailValidation').css('display', 'none');
	}
	else{
		$('#regMail').css('border-color', 'red');
		$('#regMailValidation').css('visibility', 'visible');
		$('#regMailValidation').css('display', 'block');
	}
})

$('#regPasswordRepeat').change(function(event){
	event.preventDefault();
	if($('#regPasswordRepeat').val().localeCompare($('#regPassword').val())==0)
	{
		$('#regPasswordRepeat').css('border-color', defaultBorderColor);
		$('#regPasswordRepeatValidation').css('visibility', 'hidden');
		$('#regPasswordRepeatValidation').css('display', 'none');
	}
	else{
		$('#regPasswordRepeat').css('border-color', 'red');
		$('#regPasswordRepeatValidation').css('visibility', 'visible');
		$('#regPasswordRepeatValidation').css('display', 'block');
	}
})