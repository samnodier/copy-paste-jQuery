let $cut = $('#cut');
let $copy = $('#copy');
let $paste = $('#paste');

$copy.on('click', function() {
	let $text = $('.text');
	let $copiedText = $text.clone();
	// $copiedText.insertAfter('h3');
	console.log($copiedText[0]);
	// $text.remove()
	$paste.on('click', function() {
		$('textarea').append(`${$copiedText[0].innerText}\n\n`);
	})
});

$cut.on('click', function() {
	let $text = $('.text');
	let $copiedText = $text.clone();
	// $copiedText.insertAfter('h3');
	console.log($copiedText[0]);
	$text.remove()
	$paste.on('click', function() {
		$('textarea').append(`${$copiedText[0].innerText}\n\n`);
	})
});

