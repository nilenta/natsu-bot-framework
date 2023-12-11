// I love try!!!!

module.exports = {
	async execute(client, message) {
        try {
            if (message.author.bot || !message.channel.guild) return;

            try {
                await handleMessages(client, message);
            } catch(err) {
                console.log(err)
            }
        } catch(err) {
            console.log(err)
        }
	},
}

async function handleMessages(client, message) {
    if (message.content.startsWith(process.env.PREFIX)) {
        const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);

        if (command) {
            try {
                if (message.channel.permissionsOf(client.user.id).has('sendMessages')) {
                    await command.execute(client, message, args);
                } else {
                    console.log('Bot lacks SEND_MESSAGES permission in the channel.');
                }
            } catch (error) {
                console.log(error);
                if (message.channel.permissionsOf(client.user.id).has('sendMessages')) {
                    // you cna put like a  message here idk
                } else {
                    console.log('Bot lacks SEND_MESSAGES permission in the channel.');
                }
            }
        }
    }
}