import * as path from "path";
import * as vscode from "vscode";
import { CSharpUtilitiesExtensionError } from "../errors/cSharpUtilitiesExtension.error";

function getParentDirectoryPath(uri: vscode.Uri): string {
    return path.dirname(uri.fsPath);
}

async function saveAllOpenFiles(): Promise<void> {

    const dirtyEditors =
            vscode
                .window
                .visibleTextEditors
                .filter(e => e.document.isDirty);

    for (const dirtyEditor of dirtyEditors) {

        const isSaveSuccessful = await dirtyEditor.document.save();

        if (!isSaveSuccessful) {
            throw new CSharpUtilitiesExtensionError(`Unable to save file: ${dirtyEditor.document.fileName}`);
        }
    }
}

export { getParentDirectoryPath, saveAllOpenFiles };
