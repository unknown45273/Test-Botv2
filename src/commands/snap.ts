import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class snap  implements IBotCommand{
    
    private readonly _command = "snap"

    help(): string {
        return "ban the mentioned user";
    }   
     isThisCommand(command: string): boolean {
        return command == this._command;
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete()
            .catch(console.error);

        if(!msgObject.member.hasPermission("ADMINISTRATOR"))
        {
            msgObject.channel.send(`${msgObject.author.username}, noob you don't have permission, I swag on u now swag swag swag`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        if(!mentionedUser)
        {
            msgObject.channel.send(`Can't find that user to snap ${msgObject.author.username}`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        msgObject.guild.member(mentionedUser).ban(banLog)
        .then(console.log)
        .catch(console.error)
    }
}