//create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu links 
$("#menu a").each(function() {
	var $anchor = $(this)
	//creat an option
	var $option = $("<option></option>");

	if ($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	};


	$option.val($anchor.attr("href"));
	$option.text($anchor.text());
	$select.append($option);



//option's value is href of link
	//options text is text of link
	//append option to select
});
	

//create a button 

$select.change(function() {
	window.location = $select.val();
});


//bind click to button
	//go to select's location
//modify Css to hid links on small width and show button and select
	//also hid select and button on larger widths and show links
//deal with selected opitons depending on current page