# natsu's hummus bot framework

This is the "framework" I made for natsubot, on hummus.

Feel free to modify.

[Please read the eris docs](https://abal.moe/Eris/docs/0.17.2/getting-started), you people using this are probably random 12 year olds with no prior coding knowledge.

Before doing anything, rename `.env.example` to `.env`

# how 2 run

To run this, download the code, and then place it in a folder.

Open terminal, then run

```bash
npm i
```

This will install all required libraries. After done installing, edit the .env file and add your hummus bot token.

**DO NOT FORGET TO ADD A PREFIX**

After modifying .env, you can run the bot by running

```bash
npm start
```

# how do i add stuff

In the src folder, there are two folders. "commands" and "events"

You can add events by making a file with the event name and adding this code into it

[Heres a useful link for a list of events, all events are from callCreate to the bottom.](https://abal.moe/Eris/docs/0.17.2/Client#event-callCreate)

```js
module.exports = {
    async execute(client) {
        // Code that will execute on the event
    },
}
```

Put your code in the execute function, it will run when that event is fired.

There is already a command handler in the events folder under `messageCreate.js`.

# yeah but how do i add commands

In the `commands` folder, add a js file, name it whatever you want the command to be called. For example, lets say I want to make a command called `help`.

If I want it to say "You need help? I gotchu bro" I would add this:

```js
module.exports = {
    async execute(client, message, args) {
        await message.channel.createMessage('You need help? I gotchu bro')
    },
}
```

This will execute when the user runs the help command, **BE SURE TO ADD YOUR OWN PREFIX IN THE .env FILE**

# hi i need help with this

Dm me on discord, my username is "nilenta"

Alternatively, you can dm me on hummus, my hummus tag is "natsu#1863"



https://github.com/nilenta/natsu-bot-framework/assets/145288586/5253ed92-85b0-42f0-a3b3-e9a61546da21

