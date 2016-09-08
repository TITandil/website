import Dispatcher from "../Dispatcher";
import Store from "../Store";

export function addAsset(info) {
	Dispatcher.dispatch({
		"type": "ADD_INFO",
		"info": info,
	});
}
