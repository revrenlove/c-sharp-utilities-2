import * as vscode from "vscode";
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";

@commandId("c-sharp-utilities2.example")
export class ExampleCommand extends CommandBase {

    execute(): void {
        void vscode.window.showInformationMessage("Howdy, Earth!");
    }
}
