import $ from 'jquery';
import 'owl.carousel';
import Scrollmap from 'scrollmap';
import { App } from '../core';

App.methods = {
	faq() {
		const info = $('#multi-seal-faq').find('p, ul, ol');

		info.addClass("hide");
  
		$('#multi-seal-faq h3').on("click", (e) => {
            info.addClass("hide");

            $('#multi-seal-faq h3').removeClass('active'); 

			const text = e.currentTarget;

            $(text).addClass('active');   

            const parent = $(text).parent();

			$(parent).find('p, ul, ol').toggleClass('hide');
		});		
	},
    carousel() {
        const $target = $('.owl-carousel');

        $($target).owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            stagePadding: 5,
            margin: 5,
            autoplayTimeout: 6000,
            autoplaySpeed: 1000,
            autoplayHoverPause: false
        });
    }
};

