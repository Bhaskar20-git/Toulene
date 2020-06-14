/**
 * Config (example)
 * Phantom Ozonix - https://github.com/PowerHitter0418/Phantom-Ozonix
 *
 * Copy this file to 'config.js' before starting Phantom Ozonix.
 *
 * @license MIT license
 */

'use strict';

// The username and password that Phantom Ozonix will use to login
exports.username = 'STARjames';
// leave this blank if the username is unregistered
exports.password = '11042002';

// The server address to which Phantom Ozonix will connect
exports.server = 'star-blades.glitch.me-80.psim.us';

// The avatar that Phantom Ozonix will use
exports.avatar = '';

// A guide for commands and features
exports.guide = 'https://github.com/PowerHitter0418/Phantom-Ozonix/blob/master/Guide.md';

// Rooms that Phantom Ozonix will attempt to join after logging in
// example: exports.rooms = ['room1', 'room2', 'room3'];
/**@type {Array<string>} */
exports.rooms = 'lobby,hindi,staFf';

// Rooms where scripted games are enabled
/**@type {Array<string>} */
exports.games = [];

// Rooms where scripted tournaments are enabled
/**@type {Array<string>} */
exports.tournaments = [];

// The default cap to use for scripted tournaments
exports.defaultTournamentCap = 0;

// The character that determines which messages are read as commands
exports.commandCharacter = '.';

// Symbols and rankings for the server's user groups
/**@type {{[k: string]: number}} */
exports.groups = {
	'\u203d': 0,
	'!': 0,
	' ': 0,
	'+': 1,
	'%': 2,
	'@': 3,
	'*': 3,
	'#': 4,
	'&': 5,
	'~': 6,
};

// Words that are either filtered or auto-locked by the server
/**@type {Array<string>} */
exports.bannedWords = [];

// Userids of those who have debug access to Phantom Ozonix
// example: exports.developers = ['devuser1', 'devuser2', 'devuser3'];
/**@type {Array<string>} */
exports.developers = 'bhaskar20';

// Custom functions
/**@type {?Function} */
exports.parseMessage = null;
/**@type {?Function} */
exports.moderate = null;

/**@type {boolean | {[k: string]: boolean}} */
exports.allowModeration = false;

/**@type {{[k: string]: number}} */
let punishmentPoints = {
	'verbalwarn': 0,
	'warn': 1,
	'mute': 2,
	'hourmute': 3,
	'roomban': 4,
};

/**@type {{[k: string]: string}} */
let punishmentActions = {};
for (let i in punishmentPoints) {
	punishmentActions['' + punishmentPoints[i]] = i;
}

exports.punishmentPoints = punishmentPoints;
exports.punishmentActions = punishmentActions;

// Reasons used when Phantom Ozonix punishes a user for
// flooding, stretching, caps, etc.
// example: punishmentReasons = {'flooding': 'please do not flood the chat'}

/**@type {?{[k: string]: string}} */
exports.punishmentReasons = null;

exports.allowMail = false;
export.expectations = {
                       'bhaskar20': true }
exports.crashguard = true
exports.watchconfig = true
export.aceptAll = true
exports.rooms = 'all'
exports.port = 8000
exports.serverid ='showdown'