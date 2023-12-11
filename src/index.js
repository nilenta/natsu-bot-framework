// this sucks lol

const Eris = require('eris-hummus');
const mysql = require('mysql');
const fs = require('fs');

const client = new Eris("Bot " + process.env.HUMMUS_TOKEN, { restMode: false, apiVersion: "6" });

/* 
// If you want to use mysql
const db = require(`${__dirname}/modules/mysql.js`)

const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
}

const pool = db.createPool(dbConfig)

client.query = async function (sql, values, errorHandler) {
	try {
		const results = await db.query(pool, sql, values, errorHandler)
		return results
	} catch (error) {
		console.log('Database error:', error)
	}
}

process.on('exit', () => {
	console.log("Connection closing")
	db.closePool(pool)
})

*/

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
