$(document).ready(function() {

	//namestanje kategorija u padajucem meniju i sidebaru
	$.get({
		url : 'rest/kategorije',
		success : function(listaKategorija) {
			if (listaKategorija != null) {
				let kategorijeString ="";
				kategorijeString += '<li><a href="" data-value="Sve kategorije" id="sveKategorije" class="dropdown-item opcija">Sve kategorije</a></li>';
				for (i = 0; i < listaKategorija.length; i++) {
					kategorijeString += '<li><a href="" data-value="' + listaKategorija[i].naziv + '" id="category' + i + '" class="dropdown-item opcija">' + listaKategorija[i].naziv + '</a></li>';
				}				
				$('#kategorijeMeni').html($(kategorijeString));
				
				let sidebarString = "";
				sidebarString += '<li class="active"><a class="opcija sidebarOpcija" href="" data-value="Sve kategorije" id="sidebarSveKategorije">Sve kategorije</a></li>';
				for (i = 0; i < listaKategorija.length; i++) {
					sidebarString += '<li><a href="" class="opcija sidebarOpcija" data-value="' + listaKategorija[i].naziv + '" id="sidebar' + i + '">' + listaKategorija[i].naziv + '</a></li>';
				}
				$('#sidebarKategorije').html($(sidebarString));
								
			}
			else {
				alert("ne dobijam kategorije");
			}
		}
	});
	
	$.get({
		url : 'rest/zaActive',
		success : function(kategorija) {
			if (kategorija != null) {
				let value = kategorija.naziv;
				let aElement = $(".sidebarOpcija[data-value='" + value +"']");
				var roditelj = $(aElement).parent();
				$(roditelj).addClass("active").siblings().removeClass("active");
				console.log("Naziv kategorije: \n" + value);
							}
		}
	});
	
	$.get({
		url: 'rest/listaGradova',
		success : function(listaGradova) {
			if (listaGradova != null) {
				let gradoviString = '<select name="gradovi"> \n';
				for (i = 0; i < listaGradova.length; i++) {
					gradoviString += '<option value="' +  listaGradova[i] + '">' + listaGradova[i] +'</option> \n';
					console.log("Grad " + i + "je:" + listaGradova[i]);
				}
				gradoviString += '</select>';
				$('#gradovi').html(gradoviString);
			}
		}
	})
	
	$.get({
		url : 'rest/ukategorija',
		success : function (listaOglasa) {
			if (listaOglasa != null) {
				let prikazSlikaString = "";
				for (i = 0; i < listaOglasa.length; i++) {
					prikazSlikaString += '<div class="product-item"> \n' + 
					'<div class="product product_filter"> \n' +
					'<div class="product_image"> \n' +
					'<img src="' + listaOglasa[i].slika + '" alt=""> \n' +
					'</div> \n <div class="favorite"></div> \n' +
					'<div class="product_info"> \n' +
					'<h6 class="product_name"><a class="linkOglas" id="' + listaOglasa[i].id  + '" href="" data-toggle="modal" data-target="#modalProductContent">' + listaOglasa[i].naziv + '</a></h6> \n' +
					'<div class="product_price">' + listaOglasa[i].cena + 'rsd</div> \n' +
					'</div> \n </div> \n <div class="red_button add_to_cart_button"><a class="dugmeKupi" data-value="'+ listaOglasa[i].id + '"href="#">Kupi</a></div> \n </div>';
					
				}

				$('#gridZaProizvode').html($(prikazSlikaString));
				
			}
		}
	})
	
})


$(document).on("click", ".opcija", function(event) {
	event.preventDefault();
	let imeKategorije = $(this).attr("data-value");
	let aElement = $(".sidebarOpcija[data-value='" + imeKategorije +"']");
	var roditelj = $(aElement).parent();
	$(roditelj).addClass("active").siblings().removeClass("active");
	
	$.post({
		
		url: 'rest/kliknutaKategorija',
		data: JSON.stringify({naziv: imeKategorije}),
		contentType: 'application/json',
		success: function(listaOglasa) {
			if (listaOglasa != null) {
				let prikazSlikaString = "";
				for (i = 0; i < listaOglasa.length; i++) {
					prikazSlikaString += '<div class="product-item"> \n' + 
					'<div class="product product_filter"> \n' +
					'<div class="product_image"> \n' +
					'<img src="' + listaOglasa[i].slika + '" alt=""> \n' +
					'</div> \n <div class="favorite"></div> \n' +
					'<div class="product_info"> \n' +
					'<h6 class="product_name"><a class="linkOglas" id="' + listaOglasa[i].id  + '" href="" data-toggle="modal" data-target="#modalProductContent">' + listaOglasa[i].naziv + '</a></h6> \n' +
					'<div class="product_price">' + listaOglasa[i].cena + 'rsd</div> \n' +
					'</div> \n </div> \n <div class="red_button add_to_cart_button"><a class="dugmeKupi" data-value="'+ listaOglasa[i].id + '"href="#">Kupi</a></div> \n </div>';
					
				}

				$('#gridZaProizvode').html($(prikazSlikaString));
				
			} else {
				alert("Doslo je do greske.");
			}
		}
	})	
});
	


//otvaranje detalja
	$(document).on("click", ".linkOglas", function(event) {
	event.preventDefault();
	let idOglasa = $(this).attr("id");
	console.log("NASAO SAM ID OGLASA: \n" + idOglasa);
	$.post({
							
		url: 'rest/trazenOglas',
		data: JSON.stringify({id: idOglasa}),
		contentType: 'application/json',
		success: function(oglas) {
			if (oglas != null) {
										
				prikaz = '<div class="col-lg-7"> \n' +
				'<div class="single_product_pics"> \n' +
				'<div style="margin-bottom: 100px; margin-top: 50px; margin-right: 50px;"class="single_product_image"> \n' +
				'<div class="single_product_image_background" style="background-image:url(' + oglas.slika + '); background-size: contain"></div> \n' +
				'</div> \n </div> \n </div> \n' +
				'<div class="col-lg-5"> \n' +
				'<div class="product_details"> \n' +
				'<div class="product_details_title"> \n' +
				'<h4>' + oglas.naziv + '</h4> \n' +
				'<p>' + oglas.opis + '</p> \n' +
				'</div> \n' + '<div class="product_price">' + oglas.cena + ' rsd</div> \n' +
				'<div class="quantity d-flex flex-column flex-sm-row align-items-sm-center"> \n' +
				'<div class="red_button add_to_cart_button"><a href="#">Kupi</a></div> \n' +
				'<div class="product_favorite d-flex flex-column align-items-center justify-content-center"></div> \n' +
				'</div> \n </div> \n </div>';
									
				console.log("prikaz \n" + prikaz);
				$('#dugmeClose').html($(prikaz));
			}
							
								
		}
	});
});
	
	