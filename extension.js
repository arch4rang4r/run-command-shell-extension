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
	getInitialResultSet: function(terms, callback, cancellable) {
		callback(terms);
	},
	getSubsearchResultSet: function(previous, current, callback, cancellable) {
		callback(current);
	},
	getResultMetas: function(identifiers, callback) {
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
		callback(retval);
	},
	activateResult: function(identifier, terms, timestamp) {
		Util.spawn([identifier]);
	},
	launchSearch: function(terms, timestamp) {
	}
});

function init() {
}

function enable() {
	if (!runCommandSearchProvider) {
		runCommandSearchProvider = new RunCommandSearchProvider();
		Main.overview.viewSelector._searchResults._registerProvider(runCommandSearchProvider);
	}
}

function disable() {
	if (runCommandSearchProvider) {
		Main.overview.viewSelector._searchResults._unregisterProvider(runCommandSearchProvider);
		runCommandSearchProvider = null;
	}
}
