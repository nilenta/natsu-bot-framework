module.exports = {
    async execute(client, message, args) {
        message.channel.createMessage(`<@${message.author.id}> said:\n${message.content.replace(process.env.PREFIX + 'say ','')}`)
    },
}