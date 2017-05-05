import $ from 'jquery';
import Scrollmap from 'scrollmap';

const animation = {
	init() {
		this.faq();
	},
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
	}
};

export default animation;