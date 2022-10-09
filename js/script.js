$(document).ready(function() {

	$(".f-bu ").hover(function() {

		$(this).animate({
			padding: "20px 0",
			//tex-align: "left"
		},400);
	});

	$(".f-bu ").mouseleave(function() {

		$(this).animate({
			padding: "8px 0",
			//tex-align: "left"
		},400);
	});


	// button SCroll Top

	$(window).scroll(function() {

		if($(this).scrollTop() > 50){
			$("#scrollBack").fadeIn(400);
		}else {
			$("#scrollBack").fadeOut(400);
		}

	});

	$("#scrollBack").click(function() {
		$("html, body").animate({scrollTop:0},600);
		return false;
	});


	// Form Login


	$("#btnLogin").click(function() {

		$("#formLogin").fadeIn(400);

	});

	$("#exit").click(function() {

		$("#formLogin").fadeOut(400);

	});
 


});