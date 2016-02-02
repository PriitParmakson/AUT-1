
// Globaalsed olekumuutujad
var
	lubatu = 'a', // Alustame a-st
	keelatud = ['e', 'i', 'o', 'u', 'ä', 'ö', 'ü', 'õ'], // lubatu täiend
	keelatudKoodid, // keelatu ASCII-esitus
	keelatudTeade, // keelatu inimloetav esitus
	redaktorSees = false;

// Alustamine	
$(function(){
	
	seaSyndmusekasitlejad();
	
});
	

// Sea sündmusekäsitlejad
function seaSyndmusekasitlejad() {
	// Isiku tüübi võimaldamine 
	$('#Isik').click(function () {
	    var checked = this.checked;
	    $('.isikuT').each(function () {
	        $(this).prop('disabled', !checked);
	    });
	});		

	$('#Masin').click(function () {
	    var checked = this.checked;
	    $('.isikuT').each(function () {
	        $(this).prop('disabled', checked);
	    });
	});		

	// Asutusesisene või -ülene
	$('#AvHSisene').click(function () {
	    var checked = this.checked;
	    $('.asutT').each(function () {
	        $(this).prop('disabled', !checked);
	    });
	});		

	$('#Avalik').click(function () {
	    var checked = this.checked;
	    $('.asutT').each(function () {
	        $(this).prop('disabled', checked);
	    });
	});		


}

