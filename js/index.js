import {initSlider} from "./modules/initSlider.js";
import {initReserve} from "./modules/initReserve.js";
import {initService} from "./modules/initService.js";

const init = () => {
	initSlider();
	initService();
	initReserve();
};

window.addEventListener("DOMContentLoaded", init);
