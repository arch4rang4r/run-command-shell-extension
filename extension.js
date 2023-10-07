import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';
import Gio from 'gi://Gio';
import * as Util from 'resource:///org/gnome/shell/misc/util.js';
import St from 'gi://St';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

class RunCommandSearchProvider {
	constructor (extension) {
		this._extension = extension;
	}
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
};

export default class SearchExtension extends Extension {
	enable () {
		this._provider = new RunCommandSearchProvider(this);
		Main.overview.searchController.addProvider(this._provider);
	}
	disable () {
		Main.overview.searchController.removeProvider(this._provider);
		this._provider = null;
	}
}
