import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import * as Util from 'resource:///org/gnome/shell/misc/util.js';
import St from 'gi://St';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class RunCommandSearchProvider extends Extension {
	filterResults (results, max) {
		return results;
	}
	async getInitialResultSet (terms, cancellable) {
		return this._getResults(terms);
	}
	async getSubsearchResultSet (previous, current, cancellable) {
		return this._getResults(current);
	}
	_getResults (terms) {
		let term = '';
		for (let i = 0; i < terms.length; i++) {
			term = term + terms[i] + ' ';
		}
		return [term.trim()];
	}
	async getResultMetas (identifiers, callback) {
		let retval = [];
		for (let i = 0; i < identifiers.length; i++) {
			retval.push({
				'id': identifiers[i],
				'name': identifiers[i],
				'description': identifiers[i],
				'createIcon': function(size) {
					let icon = new Gio.ThemedIcon({name: 'system-run'});
					return new St.Icon({
						icon_size: size,
						gicon: icon
					});
				}
			});
		}
		return retval;
	}
	activateResult (identifier, terms, timestamp) {
		Util.spawn(terms);
	}
	launchSearch (terms, timestamp) {
	}
	enable() {
		Main.overview._overview.controls._searchController._searchResults._registerProvider(this);
	}
	disable() {
		Main.overview._overview.controls._searchController._searchResults._unregisterProvider(this);
	}
};

function init() {
}
/*
function enable() {
	if (!runCommandSearchProvider) {
		runCommandSearchProvider = new RunCommandSearchProvider();
		if (Main.overview.viewSelector !== undefined) { // << 40
			Main.overview.viewSelector._searchResults._registerProvider(runCommandSearchProvider);
		} else {  // GNOME 40
			Main.overview._overview.controls._searchController._searchResults._registerProvider(runCommandSearchProvider);
		}
	}
}

function disable() {
	if (runCommandSearchProvider) {
		if (Main.overview.viewSelector !== undefined) { // << 40
			Main.overview.viewSelector._searchResults._unregisterProvider(runCommandSearchProvider);
		} else {
			Main.overview._overview.controls._searchController._searchResults._unregisterProvider(runCommandSearchProvider);
		}
		runCommandSearchProvider = null;
	}
}
*/
/*
export default class MyTestExtension {
	function enable() {
		if (!runCommandSearchProvider) {
			runCommandSearchProvider = new RunCommandSearchProvider();
			if (Main.overview.viewSelector !== undefined) { // << 40
				Main.overview.viewSelector._searchResults._registerProvider(runCommandSearchProvider);
			} else {  // GNOME 40
				Main.overview._overview.controls._searchController._searchResults._registerProvider(runCommandSearchProvider);
			}
		}
	}
	function disable() {
		if (runCommandSearchProvider) {
			if (Main.overview.viewSelector !== undefined) { // << 40
				Main.overview.viewSelector._searchResults._unregisterProvider(runCommandSearchProvider);
			} else {
				Main.overview._overview.controls._searchController._searchResults._unregisterProvider(runCommandSearchProvider);
			}
			runCommandSearchProvider = null;
		}
	}
}
*/
