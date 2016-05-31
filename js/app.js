//prevent spoiler from being seen
//Solution: hide spoiler
//Solution: Reveal through user interaction

//1. hide spoiler
$(".spoiler span").hide();
//2. add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3. When button is pressed
	//3.1 show spoiler
	$("button").click(function() {
		$(".spoiler span").show();
		$(this).remove();
	});
	//3.2 get rid of button