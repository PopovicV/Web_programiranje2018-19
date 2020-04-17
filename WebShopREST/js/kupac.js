$(document).ready(function() {
	$.get({
		url : 'rest/naruceniProizvodi',
		success : function(listaProizvoda) {
			if (listaProizvoda != null) {
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
				'<th scope="col">Izmeni</th> \n' +
				'</tr> \n' +
				'</thead> \n' +
				'<tbody> \n';
				for (i = 0; i < listaProizvoda.length; i++) {
					tabelaString += '<tr> \n' +
					'<th scope="row">' + listaProizvoda[i].naziv +'</th> \n' +
					'<td class="w-25"> \n' +
					'<img src="'+ listaProizvoda[i].slika + '" class="img-fluid" alt="Slika"> \n' +
					'</td> \n' +
					'<td>' + listaProizvoda[i].opis + '</td> \n' +
					'<td>' + listaProizvoda[i].cena + 'rsd</td> \n' +
					'<td><p><a class="btn btn-primary dostavljen" data-value="' + listaProizvoda[i].id + '" href=""> Dostavljen </a></p><p><a class="btn btn-primary dostavljen" data-value="' + listaProizvoda[i].id + '" href=""> Drugo dugme </a></p></td>'
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
	
	if (kliknuto == "Naručeni proizvodi") {
		$.get({
			url : 'rest/naruceniProizvodi',
			success : function(listaProizvoda) {
				if (listaProizvoda != null) {
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
					'<th scope="col">Izmeni</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaProizvoda.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaProizvoda[i].naziv +'</th> \n' +
						'<td class="w-25"> \n' +
						'<img src="'+ listaProizvoda[i].slika + '" class="img-fluid" alt="Slika"> \n' +
						'</td> \n' +
						'<td>' + listaProizvoda[i].opis + '</td> \n' +
						'<td>' + listaProizvoda[i].cena + 'rsd</td> \n' +
						'<td><p><a class="btn btn-primary dostavljen" data-value="' + listaProizvoda[i].id + '" href=""> Dostavljen </a></p></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	
	
	if (kliknuto == "Dostavljeni proizvodi") {
		$.get({
			url : 'rest/dostavljeniProizvodi',
			success : function(listaProizvoda) {
				if (listaProizvoda != null) {
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
					'<th scope="col">Izmeni</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaProizvoda.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaProizvoda[i].naziv +'</th> \n' +
						'<td class="w-25"> \n' +
						'<img src="'+ listaProizvoda[i].slika + '" class="img-fluid" alt="Slika"> \n' +
						'</td> \n' +
						'<td>' + listaProizvoda[i].opis + '</td> \n' +
						'<td>' + listaProizvoda[i].cena + 'rsd</td> \n' +
						'<td><p><a class="btn btn-primary dodajRecenziju" data-value="' + listaProizvoda[i].id + '" href=""> Dodaj recenziju </a></p><p><a class="btn btn-primary prijavi" data-value="' + listaProizvoda[i].id + '" href=""> Prijavi oglas </a></p></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	
	
	
	if (kliknuto == "Lista omiljenih proizvoda") {
		$.get({
			url : 'rest/omiljeniProizvodi',
			success : function(listaProizvoda) {
				if (listaProizvoda != null) {
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
					'<th scope="col">Izmeni</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaProizvoda.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaProizvoda[i].naziv +'</th> \n' +
						'<td class="w-25"> \n' +
						'<img src="'+ listaProizvoda[i].slika + '" class="img-fluid" alt="Slika"> \n' +
						'</td> \n' +
						'<td>' + listaProizvoda[i].opis + '</td> \n' +
						'<td>' + listaProizvoda[i].cena + 'rsd</td> \n' +
						'<td><p><a class="btn btn-primary ukloni" data-value="' + listaProizvoda[i].id + '" href=""> Ukloni </a></p></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
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

$(document).on("click", ".dostavljen", function(event) {
	event.preventDefault();
	let idOglasa = $(this).attr("data-value");
	$.post({
							
		url: 'rest/dostaviProizvod',
		data: JSON.stringify({id: idOglasa}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Oglas je prijavljen kao dostavljen");
				let aElement = $(".sidebarOpcija[data-value='Dostavljeni proizvodi']");
				$(aElement).trigger("click");
			} else {
				alert("Doslo je do greske!");
			}
							
								
		}
	});
});

$(document).on("click", ".prijavi", function(event) {
	event.preventDefault();
	let idOglasa = $(this).attr("data-value");
	$.post({
							
		url: 'rest/prijavi',
		data: JSON.stringify({id: idOglasa}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Prodavac je uspešno prijavljen");
				let aElement = $(".sidebarOpcija[data-value='Dostavljeni proizvodi']");
				$(aElement).trigger("click");
			} else {
				alert("Oglas je vec prijavljen!");
			}
							
								
		}
	});
});
