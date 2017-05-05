import { App_Build } from './src/core';
import SQS from './src/sqs';
import carousel from './src/modules/carousel';
import animation  from './src/modules/animation';

//build the site object
class Site_Build {
	constructor() {
		this.app = new App_Build();
		this.isMobile = this.app.isMobile();
		this.carousel = carousel;
		this.animation = animation;

		this.modules();

		console.log(this);
	}
	modules() {
		carousel.init();
		animation.init();
	}
}

const Site = new Site_Build();
