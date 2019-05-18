import * as Discord from "discord.js";
import * as ConfigFile from "./config"
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();


let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    //sets bot activity
    client.user.setActivity("my prefix is '>' don't abuse me btw if u do i will bite ur dick off", {type: "PLAYING"});

    console.log("ya boi is ready"); 

})

client.on("guildMemberAdd", member => {
    
    let welcomeChannel = member.guild.channels.find(channel => channel.name == "💬") as Discord.TextChannel;
    welcomeChannel.send(`Welcome ${member.displayName}! We hope u have a zwagging time here`);

    let memberRole = member.guild.roles.find(role => role.id == "569927098202980355");
    member.addRole(memberRole);
    
})

client.on("guildMemberRemove", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name == "💬") as Discord.TextChannel;
    welcomeChannel.send(`${member.displayName} aww u suck u left  noob`);    
})

client.on("message", msg => {

    //ignore messagez by bot
    if (msg.author.bot) {return; }

        //ignore messages sent in dmz
    if(msg.channel.type == "dm") {return; }

    //ignore messagez without prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix)) {return; }

    //handle the command
    handleCommand(msg);
})
async function handleCommand(msg: Discord.Message) {
    //split the string into the command and args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for(const commandClass of commands){
        //attempt to execute code
        try{

            //check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){

                //go to the next iteration of the loop if this isn't a correct command
                continue;
            }
            
            //Pause execution whilst we run commandz code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){
            
            //if there is an error then log exception
            console.log(exception);

        }
    }
}

function loadCommands(commandsPath: string) {

    //exit if no commandz
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) {return; }

    //loops through all commands
    for(const commandName of ConfigFile.config.commands as string[]) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);