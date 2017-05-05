import $ from 'jquery';
import 'owl.carousel';
import Scrollmap from 'scrollmap';
import { App } from '../core';

App.methods({
	faq(target) {
		const info = $('#multi-seal-faq').find('p, ul, ol');

		info.addClass("hide");
  
		$(target).on("click", (e) => {
            info.addClass("hide");

            $(target).removeClass('active'); 

			const text = e.currentTarget;

            $(text).addClass('active');   

            const parent = $(text).parent();

			$(parent).find('p, ul, ol').toggleClass('hide');
		});		
	},
    carousel(target) {
        const $target = $(target);

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
});

