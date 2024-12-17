import * as path from "path";
import * as vscode from "vscode";
import { CSharpUtilitiesExtensionError } from "../errors/cSharpUtilitiesExtension.error";

function getParentDirectoryPath(uri: vscode.Uri): string {
    return path.dirname(uri.fsPath);
}

async function saveAllOpenFiles(): Promise<void> {
    const savePromises =
        vscode
            .window
            .visibleTextEditors
            .filter(e => e.document.isDirty)
            .map(e => e.document.save());

    const saveResults = await Promise.all(savePromises);

    if (saveResults.some(s => !s)) {
        throw new CSharpUtilitiesExtensionError("Unable to save some files...");
    }
}

export { getParentDirectoryPath, saveAllOpenFiles };
