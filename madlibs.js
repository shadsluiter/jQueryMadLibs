$(document).ready( function() {

	$('#btnGo').click(function(){
		var x = $('#txtName').val();

		$('.name').html(x);

		x = $('#txtRestaurant').val();
		$('#restaurant').html(x);

		x = $('#txtNumber').val();
		$('#number').html(x);

		x = $('#txtCompanion').val();
		$('#companion').html(x);

		x = $('#txtAdjective').val();
		$('#adjective').html(x);
		
		x = $('#txtPeopleAtCircus').val();
		$('#peopleAtCircus').html(x);
	
		x = $('#txtMusicStyle').val();
		$('#musicStyle').html(x);
	
		x = $('#xtGame').val();
		$('#game').html(x);
	
		x = $('#txtDesert').val();
		$('.desert').html(x);
	
		x = $('#txtTypeOfSport').val();
		$('#typeOfSport').html(x);
	
		x = $('#txtKindOfEmployee').val();
		$('#kindOfEmployee').html(x);

		$('#theQuestions').hide();
	});
});