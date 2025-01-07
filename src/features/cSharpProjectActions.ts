import * as vscode from "vscode";
import { saveAllOpenFiles } from "../utilities/fileOperations";
import * as dotnetShellOperations from "../utilities/dotnetShellOperations";

async function buildCSharpProject(csprojUri: vscode.Uri): Promise<void> {

    await saveAllOpenFiles();

    const output = await dotnetShellOperations.buildProject(csprojUri);

    void vscode.window.showInformationMessage(output);
}

export { buildCSharpProject };
