var $win = $(window);
var $service = $('.service')
var $servicesSection = $('.services-section')

$servicesSection.waypoint(function () {
	$service.addClass('js-service-fade');
}, { offset: '50%' });