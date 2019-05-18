"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(Admin only) deletes desired amount of messages in channel";
    }
    isThisCommand(command) {
        return command == this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete();
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`noob this command is only for adminz`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            if (!args[0]) {
                msgObject.channel.send(`sorry but u must have a number of messages u want to be snapped`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            let numberOfMessagesToDelete = Number(args[0]);
            if (isNaN(numberOfMessagesToDelete)) {
                msgObject.channel.send(`sorry that isn't a valid number`)
                    .then(msg => {
                    msg.delete(5000);
                });
                return;
            }
            numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);
            msgObject.channel.bulkDelete(numberOfMessagesToDelete)
                .catch(console.error);
        });
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQXFCLEtBQUs7SUFBMUI7UUFFcUIsYUFBUSxHQUFHLE9BQU8sQ0FBQTtJQWlEdkMsQ0FBQztJQS9DRyxJQUFJO1FBQ0EsT0FBTyw0REFBNEQsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBQ0ssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUcvRSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztxQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUVSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxDQUFDO3FCQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDTjtZQUVELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRy9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQ2xDO2dCQUNJLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDO3FCQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU87YUFDTjtZQUdELHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFHcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aUJBQ3JELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztLQUFBO0NBQ0o7QUFuREQsd0JBbURDIn0=