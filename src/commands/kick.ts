import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class kick  implements IBotCommand{
    
    private readonly _command = "kick"

    help(): string {
        return "kicks the mentioned user";
    }   
     isThisCommand(command: string): boolean {
        return command == this._command;
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete()
        .catch(console.error);

        if(!msgObject.member.hasPermission("ADMINISTRATOR")){
            msgObject.channel.send(`${msgObject.author.username}, noob you don't have permission, I swag on u now swag swag swag`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        if(!mentionedUser)
        {
            msgObject.channel.send(`Can't find that user ${msgObject.author.username}`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        msgObject.guild.member(mentionedUser).kick(kickLog)
        .then(console.log)
        .catch(console.error)
    }
}