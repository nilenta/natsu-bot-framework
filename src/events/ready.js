module.exports = {
    execute(client) {
        // This runs when the bot gets turned on
        console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`)
        client.shards.every((shard) => shard.editStatus("online"))
    },
}