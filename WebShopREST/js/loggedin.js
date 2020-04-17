let ime ="dsa";
$(document).ready(function() {

	$.get({
		url: 'rest/ukorisnik',
		success: function(data) {
			if (data != null) {
				ime = data.korisnickoIme;
			}
			if (data.uloga == "KUPAC") {
			$('#odjavaID').before('<li class="nav-item"><a class="nav-link" href="kupac.html"> Dobrodosli ' + ime + '</a></li>');
			}
			
			if (data.uloga == "PRODAVAC") {
				$('#odjavaID').before('<li class="nav-item"><a class="nav-link" href="prodavac.html"> Dobrodosli ' + ime + '</a></li>');
			}
			
			if (data.uloga == "ADMIN") {
				$('#odjavaID').before('<li class="nav-item"><a class="nav-link" href="admin.html"> Dobrodosli ' + ime + '</a></li>');
			}
		}
	})	
	
	//za ispis svih kategorija u padajucem meniju
	$.get({
		url : 'rest/kategorije',
		success : function(listaKategorija) {
			if (listaKategorija != null) {
				let kategorijeString ="";
				kategorijeString += '<li><a href="kategorijeloggedin.html" data-value="Sve kategorije" id="sveKategorije" class="dropdown-item">Sve kategorije</a><li>';
				for (i = 0; i < listaKategorija.length; i++) {
					kategorijeString += '<li><a href="kategorijeloggedin.html" data-value="' + listaKategorija[i].naziv + '" id="category' + i + '" class="dropdown-item">' + listaKategorija[i].naziv + '</a></li>';
				}
				$('#kategorijeMeni').html($(kategorijeString));
			}
		}
	})
	//za redirect na dobru kategoriju
	$('#kategorijeMeni').on("click", "a", function(event) {
		event.preventDefault();
		let imeKategorije = $(this).attr("data-value");
		$.post({
			
			url: 'rest/kliknutaKategorija',
			data: JSON.stringify({naziv: imeKategorije}),
			contentType: 'application/json',
			success: function(data) {
				if (data != null) {
					window.location = 'kategorijeloggedin.html';
				} else {
					alert("Doslo je do greske.");
				}
			}
		})
		})
	
});

$('#logoutklik').click(function(event) {
	event.preventDefault();
	$.get({
		url: 'rest/logout',
		success: function() {
			window.location = 'homepage.html';
			
		}
	})
});


