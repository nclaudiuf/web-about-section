import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {jarallax, jarallaxElement} from 'jarallax'; //Wiki & Credits: https://github.com/nk-o/jarallax
import 'aos';

init();
// Add Element Extension.
jarallaxElement();
// Add Jarallax on DOM Node.
jarallax(document.querySelectorAll('[data-jarallax-element]'));

//ShowMediaOnHover();

function init() {
	window.$ = $;
	window.jQuery = $;
}
