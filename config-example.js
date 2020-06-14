/**
 * Static Cofiguration - Showdown Chatbot
 *
 * Copy this file into "config.js" and make the
 * configuration changes
 */

'use strict';

const Config = {};
module.exports = Config;

/* Static admin account */

Config.Static_Admin_Account = "bhaskar20";

Config.Static_Admin_Account_Password = "11042002";

/**
 * Data Mode:
 * RAW - Data is stored as flat files
 * MYSQL - Data is stored in a remote MYSQL database
 */
Config.Data_Mode = "RAW";

/* MYSQL */

Config.MYSQL = {};

Config.MYSQL.host = "http://star-blades.glitch.me-80.psim.us";

Config.MYSQL.user = "james20";

Config.MYSQL.password = "";

Config.MYSQL.database = "";
