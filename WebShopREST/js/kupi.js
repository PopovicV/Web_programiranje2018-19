$(document).on("click", ".dugmeKupi", function(event) {
	event.preventDefault();
	let idOglasa = $(this).attr("data-value");
	$.post({
							
		url: 'rest/kupiProizvod',
		data: JSON.stringify({id: idOglasa}),
		contentType: 'application/json',
		success: function(data) {
			if (data) {
				alert("Oglas je uspešno kupljen");
				
			} else {
				alert("Doslo je do greske!");
			}
							
								
		}
	});
});