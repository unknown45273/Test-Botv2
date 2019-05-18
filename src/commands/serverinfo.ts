import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class serverinfo implements IBotCommand{
    
    private readonly _command = "serverinfo"

    help(): string {
        return "serverinfo";
    }   
     isThisCommand(command: string): boolean {
        return command == this._command;
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
       let embed = new Discord.RichEmbed()
                        .setColor([255, 0, 255])
                        .setTitle("Server Info")
                        .setFooter("This server is zwag")
                        .setImage(msgObject.guild.iconURL)
                        .setDescription("Welcome to zwag land this is a cool server")
                        .addField("Server Count:", `Our server currently has ${msgObject.guild.memberCount} memberz`)

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}