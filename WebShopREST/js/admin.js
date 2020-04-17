$(document).ready(function() {
	$.get({
		url : 'rest/korisnici',
		success : function(listaKorisnika) {
			if (listaKorisnika != null) {
				let tabelaString = '';
				tabelaString += '<div class="container"> \n' +
				'<div class="row"> \n' +
				'<div class="col-12"> \n' +
				'<table class="table table-image"> \n' +
				'<thead> \n' +
				'<tr> \n' +
				'<th scope="col">Korisničko ime</th> \n' +
				'<th scope="col">Ime</th> \n'+
				'<th scope="col">Prezime</th> \n' +
				'<th scope="col">Uloga</th> \n' +
				'<th scope="col">Izmeni</th> \n' +
				'</tr> \n' +
				'</thead> \n' +
				'<tbody> \n';
				for (i = 0; i < listaKorisnika.length; i++) {
					tabelaString += '<tr> \n';
					if (listaKorisnika[i].brojPrijava > 3) {
					tabelaString += '<th style="color:red;" scope="row">' + listaKorisnika[i].korisnickoIme +'</th> \n' 
					} else {
						tabelaString += '<th scope="row">' + listaKorisnika[i].korisnickoIme +'</th> \n' ;
					}
					tabelaString += '<td>' + listaKorisnika[i].ime + '</td> \n' +
					'<td>' + listaKorisnika[i].prezime + '</td> \n' +
					'<td>' + listaKorisnika[i].uloga + '</td> \n';
					if (listaKorisnika[i].brojPrijava > 3) {
						tabelaString += '<td><p><a class="btn btn-primary promeniUlogu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Promeni ulogu </a></p><p><a class="btn btn-primary skiniZabranu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Skini zabranu </a></p></td>'
					} else {
						tabelaString += '<td><p><a class="btn btn-primary promeniUlogu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Promeni ulogu </a></p></td>';
					}
					}
				tabelaString += '</tbody> </table> </div> </div> </div>';
				console.log(tabelaString);
				$('#mainContent').html(tabelaString);
		}
		}
	})
})

$(document).on("click", ".sidebarOpcija", function(event) {
	event.preventDefault();
	let kliknuto = $(this).attr("data-value");

	var roditelj = $(this).parent();
	$(roditelj).addClass("active").siblings().removeClass("active");
	
	if (kliknuto == "Korisnici") {
		$.get({
			url : 'rest/korisnici',
			success : function(listaKorisnika) {
				if (listaKorisnika != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Korisničko ime</th> \n' +
					'<th scope="col">Ime</th> \n'+
					'<th scope="col">Prezime</th> \n' +
					'<th scope="col">Uloga</th> \n' +
					'<th scope="col">Izmeni</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaKorisnika.length; i++) {
						tabelaString += '<tr> \n';
						if (listaKorisnika[i].brojPrijava > 3) {
						tabelaString += '<th style="color:red;" scope="row">' + listaKorisnika[i].korisnickoIme +'</th> \n' 
						} else {
							tabelaString += '<th scope="row">' + listaKorisnika[i].korisnickoIme +'</th> \n' ;
						}
						tabelaString += '<td>' + listaKorisnika[i].ime + '</td> \n' +
						'<td>' + listaKorisnika[i].prezime + '</td> \n' +
						'<td>' + listaKorisnika[i].uloga + '</td> \n';
						if (listaKorisnika[i].brojPrijava > 3) {
							tabelaString += '<td><p><a class="btn btn-primary promeniUlogu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Promeni ulogu </a></p><p><a class="btn btn-primary skiniZabranu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Skini zabranu </a></p></td>'
						} else {
							tabelaString += '<td><p><a class="btn btn-primary promeniUlogu" data-value="' + listaKorisnika[i].korisnickoIme + '" href=""> Promeni ulogu </a></p></td>';
						}
						}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					console.log(tabelaString);
					$('#mainContent').html(tabelaString);
			}
			}
		})
	}
	
	if (kliknuto == "Kategorije") {
		$.get({
			url : 'rest/kategorije',
			success : function(listaKategorija) {
				if (listaKategorija != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Naziv kategorije</th> \n' +
					'<th scope="col">Opis kategorije</th> \n'+
					'<th scope="col">Broj oglasa</th> \n' +
					'<th scope="col">Opcije</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaKategorija.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaKategorija[i].naziv +'</th> \n' +
						'<td>' + listaKategorija[i].opis + '</td> \n' +
						'<td>' + listaKategorija[i].listaOglasa.length + '</td> \n' +
						'<td><p><a class="btn btn-primary izmeni" data-value="' + listaKategorija[i].naziv + '" href=""> Izmeni </a></p><p><a class="btn btn-primary obrisiKategoriju" data-value="' + listaKategorija[i].naziv + '" href=""> Obriši </a></p></td>';
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	if (kliknuto == "Dodaj kategoriju") {
		
	}
	
	if (kliknuto == "Oglasi") {
		$.get({
			url: 'rest/oglasi',
			success : function(listaOglasa) {
				if (listaOglasa != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Naziv</th> \n' +
					'<th scope="col">Slika</th> \n'+
					'<th scope="col">Opis</th> \n' +
					'<th scope="col">Cena</th> \n' +
					'<th scope="col">Status</th> \n' +
					'<th scope="col">Izmeni</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaOglasa.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaOglasa[i].naziv +'</th> \n' +
						'<td class="w-25"> \n' +
						'<img src="'+ listaOglasa[i].slika + '" class="img-fluid" alt="Slika"> \n' +
						'</td> \n' +
						'<td>' + listaOglasa[i].opis + '</td> \n' +
						'<td>' + listaOglasa[i].cena + 'rsd</td> \n' +
						'<td>' + listaOglasa[i].status + '</td> \n' +
						'<td><p><a class="btn btn-primary obrisiOglas" data-value="' + listaOglasa[i].id + '" href=""> Obriši </a></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					console.log(tabelaString);
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	
	if (kliknuto == "Primljene poruke") {
		$.get({
			url : 'rest/primljenePoruke',
			success : function(listaPoruka) {
				if (listaPoruka != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Pošiljalac</th> \n' +
					'<th scope="col">Naslov</th> \n'+
					'<th scope="col">Sadržaj</th> \n' +
					'<th scope="col">Datum</th> \n' +
					'<th scope="col">Vreme</th> \n' +
					'<th scope="col">Opcije</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaPoruka.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaPoruka[i].posiljalac +'</th> \n' +
						'<td>' + listaPoruka[i].naslov + '</td> \n' +
						'<td>' + listaPoruka[i].sadrzaj + '</td> \n' +
						'<td>' + listaPoruka[i].datum + '</td> \n' +
						'<td>' + listaPoruka[i].vreme + '</td> \n' +
						'<td><p><a class="btn btn-primary odgovori" data-value="' + listaPoruka[i].naslov + '" href=""> Odgovori </a></p><p><a class="btn btn-primary obrisi" data-value="' + listaPoruka[i].naslov + '" href=""> Obriši </a></p></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	if (kliknuto == "Poslate poruke") {
		$.get({
			url : 'rest/poslatePoruke',
			success : function(listaPoruka) {
				if (listaPoruka != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Pošiljalac</th> \n' +
					'<th scope="col">Naslov</th> \n'+
					'<th scope="col">Sadržaj</th> \n' +
					'<th scope="col">Datum</th> \n' +
					'<th scope="col">Vreme</th> \n' +
					'<th scope="col">Opcije</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaPoruka.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaPoruka[i].posiljalac +'</th> \n' +
						'<td>' + listaPoruka[i].naslov + '</td> \n' +
						'<td>' + listaPoruka[i].sadrzaj + '</td> \n' +
						'<td>' + listaPoruka[i].datum + '</td> \n' +
						'<td>' + listaPoruka[i].vreme + '</td> \n' +
						'<td><p><a class="btn btn-primary obrisi" data-value="' + listaPoruka[i].naslov + '" href=""> Obriši </a></p></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}	
})

$(document).on("click", ".promeniUlogu", function(event) {
	event.preventDefault();
	let korIme = $(this).attr("data-value");
	$.post({
							
		url: 'rest/promeniTipKorisnika',
		data: JSON.stringify({korisnickoIme: korIme}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Uloga korisnika uspešno promenjena");
				let aElement = $(".sidebarOpcija[data-value='Korisnici']");
				$(aElement).trigger("click");
			} else {
				alert("Greška prilikom promene uloge korisnika");
			}
							
								
		}
	});
});


$(document).on("click", ".skiniZabranu", function(event) {
	event.preventDefault();
	let korIme = $(this).attr("data-value");
	$.post({
							
		url: 'rest/skiniZabranu',
		data: JSON.stringify({korisnickoIme: korIme}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Zabrana uspešno ukinuta.");
				let aElement = $(".sidebarOpcija[data-value='Korisnici']");
				$(aElement).trigger("click");
			} else {
				alert("Greška prilikom skidanja zabrane");
			}
							
								
		}
	});
});

$(document).on("click", ".obrisiKategoriju", function(event) {
	event.preventDefault();
	let nazivKategorije = $(this).attr("data-value");
	$.post({
							
		url: 'rest/izbrisiKategoriju',
		data: JSON.stringify({naziv: nazivKategorije}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Kategorija uspesno obrisana.");
				let aElement = $(".sidebarOpcija[data-value='Kategorije']");
				$(aElement).trigger("click");
			} else {
				alert("Kategorija sadrzi oglase!");
			}
							
								
		}
	});
});

$(document).on("click", ".obrisiOglas", function(event) {
	event.preventDefault();
	let idOglasa = $(this).attr("data-value");
	$.post({
							
		url: 'rest/izbrisiOglas',
		data: JSON.stringify({id: idOglasa}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Oglas je uspesno obrisan.");
				let aElement = $(".sidebarOpcija[data-value='Oglasi']");
				$(aElement).trigger("click");
			} else {
				alert("Doslo je do greske prilikom brisanja oglasa!");
			}
							
								
		}
	});
});
