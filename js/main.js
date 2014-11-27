$(".work-grid a").on("click", function(eventobj){
	var id=$(this).attr("href");

	$(".portfolio-wrapper").attr("data-state","close");
	$(id) .attr("data-state","open");
	$(window).resize();
})