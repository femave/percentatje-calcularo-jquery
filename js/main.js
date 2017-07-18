$('#f1-calculate').on('click', function(){
	var f1aIn = $('#f1-a').val()
	var f1bIn = $('#f1-b').val()
	var resultf1ab = f1aIn/100*f1bIn
	$('#f1-result').val(resultf1ab)
	})

$('#f2-calculate').on('click', function(){
	var f1aIn = $('#f2-a').val()
	var f1bIn = $('#f2-b').val()
	var resultf1ab = f1aIn/f1bIn*100
	$('#f2-result').val(resultf1ab)
	})

$('#f3-calculate').on('click', function(){
	var f1aIn = $('#f3-a').val()
	var f1bIn = $('#f3-b').val()
	var resultf1ab = (f1bIn - f1aIn) / f1aIn  * 100;
	$('#f3-result').val(resultf1ab)
	})





