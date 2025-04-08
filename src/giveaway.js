const { EventEmitter } = require("node:events");
const merge = require("deepmerge");

const { GiveawayOptions } = require("./constants");
const { GiveawayManager } = require("./manager");

/**
 * Represent a giveaway
 *
 * @author Ena0
 */
class Giveaway extends EventEmitter {
	/**
	 * @param {GiveawayOptions} options
	 */
	constructor(manager, options = {}) {
		super();

		/**
		 * The giveaway manager
		 *
		 * @type {GiveawayManager}
		 */
		this.manager = manager;

		/**
		 * giveaway options
		 *
		 * @type {GiveawayOptions}
		 */
		this.options = merge(GiveawayOptions, options);
	}
}

module.exports = { Giveaway };
