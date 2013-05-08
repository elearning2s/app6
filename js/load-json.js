$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');

	$.ajax({
		url: 'http://192.168.1.3/studia_facile/',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
});