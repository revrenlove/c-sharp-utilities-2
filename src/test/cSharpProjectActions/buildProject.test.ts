import * as vscode from "vscode";
import * as assert from "assert";
import { buildCSharpProject } from "../../features/cSharpProjectActions";
import { TerminalError } from "../../errors/terminal.error";

const maxTimeout = 20000;

suite("Build Project Tests", () => {

    test("Compile error throws TerminalError", async () => {

        const uri = vscode.Uri.file(`${__dirname}/../assets/projects/ProjectThatWillNotBuild/ProjectThatWillNotBuild.csproj`);

        await assert.rejects(async () => {
            await buildCSharpProject(uri);
        }, TerminalError);

    }).timeout(maxTimeout);

    test("Ensure successful project build", async () => {

        const uri = vscode.Uri.file(`${__dirname}/../assets/projects/ProjectThatWillBuild/ProjectThatWillBuild.csproj`);

        await assert.doesNotReject(async () => {
            await buildCSharpProject(uri);
        });

    }).timeout(maxTimeout);
});
