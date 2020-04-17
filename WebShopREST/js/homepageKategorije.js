$(document).ready(function(event) {
	//za ispis svih kategorija u padajucem meniju
	$.get({
		url : 'rest/kategorije',
		success : function(listaKategorija) {
			if (listaKategorija != null) {
				let kategorijeString ="";
				kategorijeString += '<li><a href="kategorije.html" data-value="Sve kategorije" id="sveKategorije" class="dropdown-item">Sve kategorije</a><li>';
				for (i = 0; i < listaKategorija.length; i++) {
					kategorijeString += '<li><a href="kategorije.html" data-value="' + listaKategorija[i].naziv + '" id="category' + i + '" class="dropdown-item">' + listaKategorija[i].naziv + '</a></li>';
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
					window.location = 'kategorije.html';
				} else {
					alert("Doslo je do greske.");
				}
			}
		})
		})
});