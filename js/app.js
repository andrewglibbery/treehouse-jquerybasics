//Problem- when clicking on image, goes to dead end
//Solution: create an overlay with large image - lightbox

//2. Add overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);
	//2.1 An Image
	//2.2 A Caption


//1. Capture the click event on a link to an image
$("#imageGallery a").click(function( event) {
	event.preventDefault();
	
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);


	$overlay.show();

	var $captionText = $(this).children("img").attr("alt");
	$caption.text($captionText);

});
	//1.1 show the overlay
	//1.2 Update overlay with the image in the link
	//1.3 Get child's alt attribute and set caption

//3. When overlay is clicked
	//3.1 hide overlay
$overlay.click(function() {
	$overlay.hide();
});