import $ from 'jquery';
import 'owl.carousel';

const carousel = {
    init() {
        this.run();
    },
    run() {
        const $target = $('.owl-carousel');

        $($target).owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            stagePadding: 5,
            margin: 5,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
            autoplayHoverPause: false
        });
    }
};

export default carousel;