// this sucks lol

const Eris = require('eris-hummus');
const fs = require('fs');

const client = new Eris("Bot " + process.env.HUMMUS_TOKEN, { restMode: false, apiVersion: "6" });

client.commands = new Map();
const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);
	client.commands.set(file.replace('.js', ''), command);
	console.log(`Registered command ${file.replace('.js', '')}`)
}

const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`${__dirname}/events/${file}`);
	client.on(file.replace('.js', ''), (...args) => event.execute(client, ...args));
	console.log(`Registered event ${file.replace('.js', '')}`)
}

client.connect();
