 function resumeHTML() {
 	let $resumeEmbed = $("<embed>");
 	let contentHeight = $("#mainContent").height();
 	$resumeEmbed.attr({
 		'src': './personalWebsite/images/AndrewHuang.pdf',
 		'width': '100%',
 		'height': contentHeight - 40,
 		'type': 'application/pdf',
 	});
 	$("#mainContent").append($resumeEmbed);
 }