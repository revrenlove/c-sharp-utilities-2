import * as vscode from "vscode";
import { exec } from "child_process";
import { promisify } from "util";
import { TerminalError } from "../errors/terminal.error";
import * as fileOperations from "../utilities/fileOperations";

const execAsync = promisify(exec);

enum DotnetCommand {
    Build = "build",
}

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

    // BUG: This never "resolves".. . let's try synchronous...
    const execResult = await execAsync(command, { "cwd": directoryPath });

    if (execResult.stderr) {
        throw new TerminalError(execResult.stdout, execResult.stderr);
    }

    return execResult.stdout;
}

export { buildProject };
