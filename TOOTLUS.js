
// Globaalsed olekumuutujad
var kT; // Kasutatavad e-identimissüsteemid ja autentimisvahendid
var skoor = 0; // Skoor

// Skoor
function sk(n) {
	skoor = skoor + n;
	$('#skoor').text(n.toString());
}

// Kuva kasutatavad e-identimissüsteemid ja autentimisvahendid
function kuvaS() {
	var t; t = '';
	if ($('#PE421').prop('checked')) { sk(10); t = t + 'ID-kaart; '; };
	if ($('#PE422').prop('checked')) { sk(10); t = t + 'mobiil-ID; '; };
	if ($('#PE423').prop('checked')) { t = t + 'asutuse kasutajate kataloog (Active Directory, LDAP); '; };
	if ($('#PE424').prop('checked')) { t = t + 'süsteemis loodud kasutajakonto/parool; '; };
	if ($('#PE425').prop('checked')) { t = t + 'sotsiaalvõrgustik; '; };
	if ($('#PE426').prop('checked')) { t = t + 'EL liikmesriigi tunnustatud e-identimissüsteem (eIDAS); '; };
	if ($('#PE427').prop('checked')) { sk(5); t = t + 'seadme IP aadressi järgi; '; };
	if ($('#PE428').prop('checked')) { t = t + 'teadmuspõhise autentimise kasutamisega; '; };
	if ($('#PE429').prop('checked')) { t = t + 'olemuspõhise autentimise (füüsilise biomeetrilise autentimise) kasutamisega; '; };	
	if ($('#PE42A').prop('checked')) { t = t + 'olemuspõhise autentimise (käitumusliku biomeetrilise autentimise) kasutamisega; '; };
	$('#PR42').text(t);
}

$(document).ready(function(){
    $('.detect42').click(function(){
      kuvaS();
       });
});

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

	// Teenuse liik
	$('#PE111').click(function () { $('#PR11').text('avalik'); });		
	$('#PE112').click(function () { $('#PR11').text('avaliku halduse sisene'); });		
	$('#PE113').click(function () { $('#PR11').text('nii avalik kui ka avaliku halduse sisene'); });		
	$('#PE114').click(function () { $('#PR11').text('?'); });		

	$('#PE121').click(function () { $('#PR12').text('asutusesisene'); });		
	$('#PE122').click(function () { $('#PR12').text('asutuseülene'); });		
	$('#PE123').click(function () { $('#PR12').text('?'); });		

	$('#PE131').click(function () { $('#PR13').text('teenust pakkuv süsteem omab administeerimisliidest'); });		
	$('#PE132').click(function () { $('#PR13').text('teenust pakkuv süsteem ei oma administreerimisliidest'); });		
	$('#PE133').click(function () { $('#PR13').text('?'); });		

	$('#PE141').click(function () { $('#PR14').text('eraisikutele suunatud e-teenus'); });		
	$('#PE142').click(function () { $('#PR14').text('ettevõtetele (juriidilistele isikutele) suunatud e-teenus'); });		
	$('#PE143').click(function () { $('#PR14').text('nii eraisikutele kui ka juriidilistele isikutele suunatud e-teenus'); });		
	$('#PE144').click(function () { $('#PR14').text('?'); });		

	$('#PE151').click(function () { $('#PR15').text('veebiteenus (veebisirvikuga kasutamiseks)'); });		
	$('#PE152').click(function () { $('#PR15').text('nutiteenus'); });		
	$('#PE153').click(function () { $('#PR15').text('muu (nt infokiosk'); });		
	$('#PE154').click(function () { $('#PR15').text('?'); });		

	$('#PE161').click(function () { $('#PR16').text('teenust pakutakse X-tee teenusena'); });		
	$('#PE162').click(function () { $('#PR16').text('teenust pakutakse muu veebiteenusena (nt REST API)'); });		
	$('#PE163').click(function () { $('#PR16').text('?'); });		

	$('#PE171').click(function () { $('#PR17').text('eraldikasutatav teenus'); });		
	$('#PE172').click(function () { $('#PR17').text('võib eeldada e-teenuse kasutamist koos teiste e-teenustega'); });		
	$('#PE173').click(function () { $('#PR17').text('?'); });		

	$('#PE211').click(function () { $('#PR21').text('inimkasutajad'); });		
	$('#PE212').click(function () { $('#PR21').text('masinkasutajad'); });		
	$('#PE213').click(function () { $('#PR21').text('nii inim- kui ka masinkasutajad'); });		
	$('#PE214').click(function () { $('#PR21').text('?'); });		

	$('#PE211').click(function () { $('#PR22').text('EE kodanik'); });		
	$('#PE212').click(function () { $('#PR22').text('EL teise riigi kodanik'); });		
	$('#PE213').click(function () { $('#PR22').text('nii EE kui ka EL teiste riikide kodanikud'); });		
	$('#PE214').click(function () { $('#PR22').text('?'); });		

	$('#PE311').click(function () { $('#PR31').text('kasutaja autentimine vajalik'); });		
	$('#PE312').click(function () { $('#PR31').text('kasutaja autentimine ei ole vajalik'); });		
	$('#PE313').click(function () { $('#PR31').text('vajalik mõnede kasutajagruppide autentimine'); });		
	$('#PE314').click(function () { $('#PR31').text('?'); });		

	$('#PE321').click(function () { $('#PR32').text('vaja on tuvastada konkreetne kasutaja'); });		
	$('#PE322').click(function () { $('#PR32').text('piisab kasutajal mõne tunnuse või mingisse rühma kuulumise tuvastamisest (atribuutautentimine)'); });		
	$('#PE323').click(function () { $('#PR32').text('?'); });		

	$('#PE331').click(function () { $('#PR33').text('ei ole koormav; vastupidi, sisselogimine tõstab kasutaja turvatunnet'); });		
	$('#PE332').click(function () { $('#PR33').text('ei ole koormav'); });		
	$('#PE333').click(function () { $('#PR33').text('koormav'); });		
	$('#PE334').click(function () { $('#PR33').text('väga koormav; sisselogimine võib olla deal breaker, e-teenuse kasutamist tõkestav tegur'); });		
	$('#PE335').click(function () { $('#PR33').text('?'); });		

	$('#PE411').click(function () { $('#PR41').text('ei ole teada autentimisteenust, mida saaks kasutada'); });		
	$('#PE412').click(function () { sk(20); $('#PR41').text('jah, asutusesisest SSO teenust'); });		
	$('#PE413').click(function () { sk(10); $('#PR41').text('jah, asutusesisest autentimisteenust (mitte SSO)'); });		
	$('#PE414').click(function () { sk(10); $('#PR41').text('jah, asutusevälist autentimisteenust (mitte SSO, mitte eesti.ee)'); });		
	$('#PE415').click(function () { sk(10); $('#PR41').text('jah, eesti.ee autentimisteenust'); });		
	$('#PE416').click(function () { sk(5); $('#PR41').text('saab taaskasutada olemasoleva autentimislahenduse koodi'); });		
	$('#PE417').click(function () { $('#PR41').text('?'); });		

	$('#PE431').click(function () { $('#PR43').text('e-teenust pakkuv süsteem ise'); });		
	$('#PE432').click(function () { sk(10); $('#PR43').text('asutuse ühtne autentimislahendus'); });		
	$('#PE433').click(function () { $('#PR43').text('Pangalink'); });		
	$('#PE434').click(function () { sk(10); $('#PR43').text('eIDAS EE sõlm'); });		
	$('#PE435').click(function () { sk(10); $('#PR43').text('eIDAS EL teise liikmesriigi sõlm'); });		
	$('#PE436').click(function () { $('#PR43').text('eesti.ee, sessiooni üleandmisega'); });		
	$('#PE437').click(function () { $('#PR43').text('sotsiaalvõrgustik'); });		
	$('#PE438').click(function () { $('#PR43').text('?'); });		
}

