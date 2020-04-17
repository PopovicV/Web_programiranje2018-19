$(document).ready(function() {
	$.get({
		url : 'rest/objavljeniProizvodi',
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
				'<th scope="col">Status</th> \n' +
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
					'<td>' + listaProizvoda[i].status + '</td> \n' +
					'<td><p><a class="btn btn-primary izmeni" data-value="' + listaProizvoda[i].id + '" href=""> Izmeni </a></td>'
				}
				tabelaString += '</tbody> </table> </div> </div> </div>';
				console.log(tabelaString);
				$('#mainContent').html(tabelaString);
			}
		}
	});
	
	$.get({
		url : 'rest/oglasZaLajkove',
		success : function(oglas) {
			if ( oglas != null) {
				let string = '';
				string += '<p><i class="fa fa-thumbs-up"></i>'+ oglas.brojLajkova +'<i  style="padding-left:10px" class="fa fa-thumbs-down"></i>' + oglas.brojDislajkova + '</p>';
				$('#lajkovi').html(string);
			}
		}
	})
	
})

$(document).on("click", ".sidebarOpcija", function(event) {
	event.preventDefault();
	let kliknuto = $(this).attr("data-value");

	var roditelj = $(this).parent();
	$(roditelj).addClass("active").siblings().removeClass("active");
	
	if (kliknuto == "Objavljeni oglasi") {
		$.get({
			url : 'rest/objavljeniProizvodi',
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
						'<td><p><a class="btn btn-primary izmeni" data-value="' + listaProizvoda[i].id + '" href=""> Izmeni </a></td>'
					}
					tabelaString += '</tbody> </table> </div> </div> </div>';
					$('#mainContent').html(tabelaString);
				}
			}
		})
	}
	
	
	
	if (kliknuto == "Recenzije") {
		$.get({
			url : 'rest/recenzije',
			success : function(listaRecenzija) {
				if (listaRecenzija != null) {
					let tabelaString = '';
					tabelaString += '<div class="container"> \n' +
					'<div class="row"> \n' +
					'<div class="col-12"> \n' +
					'<table class="table table-image"> \n' +
					'<thead> \n' +
					'<tr> \n' +
					'<th scope="col">Naziv oglasa</th> \n' +
					'<th scope="col">Recezent</th> \n'+
					'<th scope="col">Naslov</th> \n' +
					'<th scope="col">Slika</th> \n' +
					'<th scope="col">Sadržaj</th> \n' +
					'<th scope="col">Opis tačan</th> \n' +
					'<th scope="col">Ispoštovan dogovor</th> \n' +
					'</tr> \n' +
					'</thead> \n' +
					'<tbody> \n';
					for (i = 0; i < listaRecenzija.length; i++) {
						tabelaString += '<tr> \n' +
						'<th scope="row">' + listaRecenzija[i].oglas.naziv +'</th> \n' +
						'<td>' + listaRecenzija[i].recezent + '</td> \n' +
						'<td>' + listaRecenzija[i].naslov + '</td> \n' +
						'<td class="w-25"> \n' +
						'<img src="'+ listaProizvoda[i].slika + '" class="img-fluid" alt="Slika"> \n' +
						'</td> \n' +
						'<td>' + listaRecenzija[i].sadrzaj + '</td> \n' +
						'<td>' + listaRecenzija[i].opisTacan + '</td> \n' +
						'<td>' + listaRecenzija[i].ispostovanDogovor + '</td> \n';
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