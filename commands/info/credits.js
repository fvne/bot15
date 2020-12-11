const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "credits",
        aliases: [''],
        category: 'info',
        description: 'Shows credits',
        usage: '',
        accessableby: 'everyone'
    },
    run: async (bot, message, args) => {
            const embed = new MessageEmbed()
                .setTitle(`Vilon Credits`)
                .setColor("GREEN")
                .setDescription(`This bot is a bot created by **fune**!`)
                .setFooter(message.guild.name, message.guild.iconURL())
            message.channel.send(embed)
    }
};
