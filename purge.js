exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You don't have permission to run this command!");
    }
    if(!args[0]) {
        return message.channel.send("Please input a number of messages for me to delete!");
    }
    let amount = args[0];
    if(isNaN(amount)) {
        return message.channel.send("Arguement supplied isn't a number!");
    }
    if(amount > 100) {
        return message.channel.send("I'm sorry, but you can only purge 100 messages at a time!");
    }
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Please ensure that I have the Manage Messages permission in order to continue with the command!");
    }
    message.delete();
    let purged = await message.channel.bulkDelete(amount);
    return message.channel.send(`<@${message.author.id}> You have deleted ${purged.size} messages in this channel!`);
}
