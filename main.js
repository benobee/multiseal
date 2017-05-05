import SQS from './src/sqs';
import { App } from './src/core';
import './src/methods/methods';

//build the site object
class Site_Build {
	constructor() {
		/* MODULES */
		this.app = App;
		
		App.call("carousel", ".owl-carousel");
		App.call("faq", "#multi-seal-faq h3");

		console.log(this);
	}
}

const Site = new Site_Build();
