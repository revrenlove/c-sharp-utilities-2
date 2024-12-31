import * as vscode from "vscode";
import { CommandBase, commandId } from "@revrenlove/easy-vscode-commands";
import * as cSharpProjectActions from "../features/cSharpProjectActions";

@commandId("c-sharp-utilities2.buildCSharpProject")
export class BuildCSharpProjectCommand extends CommandBase {

    // TODO: JE - https://github.com/revrenlove/c-sharp-utilities-2/issues/12
    async execute(csprojUri: vscode.Uri): Promise<void> {

        await cSharpProjectActions.buildCSharpProject(csprojUri);
    }
}
