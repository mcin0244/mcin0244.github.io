var $win = $(window);
var $servicesSection = $('.services-section');
var $service = $('.service');

$servicesSection.waypoint(function () {
	$service.addClass('js-service-fade');
}, { offset: '50%' });
