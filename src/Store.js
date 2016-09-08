import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";

class AppStore extends EventEmitter {
	constructor() {
		super();
		this.info = {};
	}

	setInfo(info) {
		this.info = info;
	}

	getInfo() {
		return this.info;
	}

	handleActions(action) {
		switch(action.type) {
		    case "SET_INFO": {
		        this.setInfo(action.info)
		        this.emit("infoEdited");
		        break;
		    }
		}
	}

}

const Store = new AppStore;
dispatcher.register(Store.handleActions.bind(Store));

export default Store;
