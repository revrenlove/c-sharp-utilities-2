import * as vscode from "vscode";
import { exec } from "child_process";
import { promisify } from "util";
import * as fileOperations from "../utilities/fileOperations";
import { ExecError } from "../errors/exec.error";
import { TerminalError } from "../errors/terminal.error";

const execAsync = promisify(exec);

enum DotnetCommand {
    Build = "build",
}

/**
 * Builds a `dotnet` project
 * @param {vscode.Uri} projectUri - The URI of the project to build.
 * @returns {Promise<string>} A promise that resolves to the `stdout` from the `dotnet build`
 * @throws {TerminalError} if build is unsuccessful.
 */
async function buildProject(projectUri: vscode.Uri): Promise<string> {

    const directoryPath = fileOperations.getParentDirectoryPath(projectUri);

    const commandResult = await executeDotnetCommandAsync(directoryPath, DotnetCommand.Build);

    return commandResult;
}

async function executeDotnetCommandAsync(
    directoryPath: string,
    dotnetCommand: DotnetCommand,
    ...commandArgs: string[]
): Promise<string> {

    let command = `dotnet ${dotnetCommand}`;

    if (commandArgs.length > 0) {
        command += ` ${commandArgs.join(" ")}`;
    }

    try {
        const execResult = await execAsync(command, { "cwd": directoryPath });

        return execResult.stdout;
    }
    catch (e: unknown) {

        throw new TerminalError(e as ExecError);
    }
}

export { buildProject };
