// Module imports
const faker = require('faker')

const defaults = {
	months: 3,
}

module.exports = (args = {}) => {
	const {
		channel,
		channelid,
		color,
		host,
		messageid,
		months,
		timestamp,
		userid,
		username,
		username2 = faker.internet.userName(),
	} = {
		...defaults,
		...args,
	}

	return {
		'badge-info': [`subscriber/${months}`],
		badges: [`subscriber/${months}`],
		color: color,
		'display-name': username,
		emotes: null,
		flags: null,
		id: messageid,
		login: username,
		mod: 0,
		'msg-id': 'giftpaidupgrade',
		'msg-param-sender-login': username2,
		'msg-param-sender-name': username2,
		'room-id': channelid,
		subscriber: 1,
		'system-msg': `${username} is continuing the Gift Sub they got from ${username2}!`,
		'tmi-sent-ts': timestamp,
		'user-id': userid,
		'user-type': null,
		message: `${host} USERNOTICE #${channel}`,
	}
}