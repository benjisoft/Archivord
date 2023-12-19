import {onRequest} from 'firebase-functions/v2/https';

import express = require('express');
import cors = require('cors');
const app = express();

app.use(cors());

app.get('/guilds', (req, res) => {
	const dummyData = ['624200301770965043', '624200301770965044', '624200301770965045'];
	res.status(501).send(dummyData);
});

app.get('/guilds/:guildId/channels', (req, res) => {
	const dummyData = ['624200301770965043', '624200301770965044', '624200301770965045'];
	res.status(501).send(dummyData);
});

app.get('/guilds/:guildId/channels/:channelId/messages', (req, res) => {
	const dummyData = {
		'additionalProp1': {
			'content': 'string',
			'authorId': 'string',
			'authorUsername': 'string',
			'authorNick': 'string'
		},
		'additionalProp2': {
			'content': 'string',
			'authorId': 'string',
			'authorUsername': 'string',
			'authorNick': 'string'
		},
		'additionalProp3': {
			'content': 'string',
			'authorId': 'string',
			'authorUsername': 'string',
			'authorNick': 'string'
		}
	};
	res.status(501).send(dummyData);
});

//TODO: Implement proper CORS
exports.widget = onRequest({region: 'europe-central1'}, app);
