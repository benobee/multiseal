import SQS from './src/sqs';
import { App } from './src/core';
import * as methods from './src/methods/methods';

//build the site object
class Site_Build {
	constructor() {
		/* MODULES */
		this.app = App;
		
		App.methods.carousel();
		App.methods.faq();

		console.log(this);
	}
}

const Site = new Site_Build();
