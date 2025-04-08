const { EventEmitter } = require("node:events");
const merge = require("deepmerge");

const { GiveawayManagerOptions } = require("./constants");
const { Giveaway } = require("./giveaway");

/**
 * Used to manage all giveaways created
 *
 * @author Ena0
 */
class GiveawayManager extends EventEmitter {
	/**
	 * @param {Discord.Client} client
	 * @param {GiveawayManagerOptions} options
	 */
	constructor(client, options = {}) {
		super();

		/**
		 * A discord.js client used to interact with discord
		 *
		 * @type {Discord.Client}
		 */
		this.client = client;

		/**
		 * Managers options
		 *
		 * @type {GiveawayManagerOptions}
		 */
		this.options = merge(GiveawayManagerOptions, options);

		/**
		 * All giveaways cached
		 *
		 * @type {Giveaway}
		 */
		this.giveaways = [];

		this.__init();
	}

	async __init() {}
}

module.exports = { GiveawayManager };
