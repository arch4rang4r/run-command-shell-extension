const Main = imports.ui.main;
const Lang = imports.lang;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Util = imports.misc.util;
const St = imports.gi.St;

let runCommandSearchProvider = null;

const RunCommandSearchProvider = new Lang.Class({
	Name: 'runCommandSearchProvider',
	_init: function() {
		this.id = 'runCommandSearchProvider';
	},
	filterResults: function(results, max) {
		return results;
	},
	getInitialResultSet: async function(terms, cancellable) {
		return this._getResults(terms);
	},
	getSubsearchResultSet: async function(previous, current, cancellable) {
		return this._getResults(current);
	},
	_getResults: function(terms) {
		let term = '';
		for (let i = 0; i < terms.length; i++) {
			term = term + terms[i] + ' ';
		}
		return [term.trim()];
	},
	getResultMetas: async function(identifiers, callback) {
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
	},
	activateResult: function(identifier, terms, timestamp) {
		Util.spawn(terms);
	},
	launchSearch: function(terms, timestamp) {
	}
});

function init() {
}

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
