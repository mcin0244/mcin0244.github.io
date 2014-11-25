var $win = $(window);
var $servicesSection = $('.services-section');
var $service = $('.service');
var $aboutSection = $('.about-section');
var $about = $('.about');
$servicesSection.waypoint(function () {
	$service.addClass('js-service-fade');
}, { offset: '50%' });

$aboutSection.waypoint(function () {
	$about.addClass('js-service-fade');
}, { offset: '50%' });
