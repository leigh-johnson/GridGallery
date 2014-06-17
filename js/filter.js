
$("#showAll").click(function () {
	$("figure").removeClass('hidden');
});

// This really means hide everything else
$("#showRed").click(function () {
	$("figure").removeClass('hidden');
	$("figure.code, figure.music, figure.photo, figure.dance").addClass("hidden");
});

$("#showGreen").click(function () {
	$("figure").removeClass('hidden');
	$("figure.code, figure.music, figure.photo, figure.art").addClass("hidden");
})

$("#showOrange").click(function () {
	$("figure").removeClass('hidden');
	$("figure.art, figure.music, figure.photo, figure.dance").addClass("hidden");
})

$("#showPurple").click(function () {
	$("figure").removeClass('hidden');
	$("figure.code, figure.art, figure.photo, figure.dance").addClass("hidden");
})

$("#showYellow").click(function () {
	$("figure").removeClass('hidden');
	$("figure.code, figure.art, figure.art, figure.dance").addClass("hidden");
})