import * as vscode from "vscode";
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import * as dotnetShellOperations from "../utilities/dotnetShellOperations";
import { saveAllOpenFiles } from "../utilities/fileOperations";

@commandId("c-sharp-utilities2.buildCSharpProject")
export class BuildCSharpProjectCommand extends CommandBase {

    // TODO: JE - https://github.com/revrenlove/c-sharp-utilities-2/issues/12
    async execute(csprojUri: vscode.Uri): Promise<void> {

        // TODO: JE - Maybe not put the actual "business" logic here...

        await saveAllOpenFiles();

        const output = await dotnetShellOperations.buildProject(csprojUri);

        void vscode.window.showInformationMessage(output);
    }
}
