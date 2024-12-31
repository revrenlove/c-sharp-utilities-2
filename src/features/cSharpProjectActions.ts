import * as vscode from "vscode";
import { saveAllOpenFiles } from "../utilities/fileOperations";
import * as dotnetShellOperations from "../utilities/dotnetShellOperations";
// import { TerminalError } from "../errors/terminal.error";

async function buildCSharpProject(csprojUri: vscode.Uri): Promise<void> {

    await saveAllOpenFiles();

    try {
        const output = await dotnetShellOperations.buildProject(csprojUri);

        void vscode.window.showInformationMessage(output);
    }
    catch (e: unknown) {

        // TODO: JE - figure out how to actually output the error... text editor/output #12
        // TODO: JE - Or should this just fall under the "command"
        void vscode.window.showErrorMessage((e as Error).message);
    }
}

export { buildCSharpProject };
