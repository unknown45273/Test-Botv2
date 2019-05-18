import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(Admin only) deletes desired amount of messages in channel";
    }
    isThisCommand(command: string): boolean {
        return command == this._command;
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>{

        //clean up our message
        msgObject.delete();

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`noob this command is only for adminz`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        if(!args[0]){

            msgObject.channel.send(`sorry but u must have a number of messages u want to be snapped`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
        return;
        }

        let numberOfMessagesToDelete = Number(args[0]);

            //check if number is an actual number
        if(isNaN(numberOfMessagesToDelete))
        {
            msgObject.channel.send(`sorry that isn't a valid number`)
            .then(msg => {
                (msg as Discord.Message).delete(5000);
            });
        return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        //delete number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
        .catch(console.error);
    }
}