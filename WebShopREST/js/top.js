$(document).ready(function(event) {
	$.get({
		url : 'rest/top',
		success : function(lajkovani) {
			if (lajkovani != null) {
				let lajkovaniString = "";
				for (i = 0; i < lajkovani.length; i++) {
					lajkovaniString += '<div class="owl-item" style="width: 222px;">'+
					'<div class="owl-item product_slider_item"> \n' +
					'<div class="product-item"> \n' +
					'<div class="product"> \n' +
					'<div class="product_image"> \n' +
					'<img src="' + lajkovani[i].slika + '" alt=""> \n' +
					'</div> \n' + 
					'<div class="favorite"> \n' +
					'</div> \n' +
					'<div class="product_info"> \n' +
					'<h6 class="product_name"><a class="linkOglas" id="'+ lajkovani[i].id +'" href="" data-toggle="modal" data-target="#modalProductContent">' + lajkovani[i].naziv + '</a></h6> \n' +
					'<div class="product_price">' + lajkovani[i].cena + ' rsd</div> \n' +
					'</div> \n </div> \n </div> \n </div> \n </div>';
					console.log("ID PROIZVODA JE:\n" + lajkovani[i].id);
						
				}

				$('.owl-stage').html($(lajkovaniString));
				
				$('.linkOglas').on("click", function(e) {
					e.preventDefault();
					let idOglasa = $(this).attr("id");
					
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
				
			}
		}
	});
})