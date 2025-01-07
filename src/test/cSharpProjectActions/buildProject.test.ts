import * as vscode from "vscode";
import * as assert from "assert";
import { buildCSharpProject } from "../../features/cSharpProjectActions";
import { TerminalError } from "../../errors/terminal.error";

suite("Build Project Tests", () => {

    test("Compile error throws TerminalError", async () => {

        const uri = vscode.Uri.file(`${__dirname}/../assets/projects/ProjectThatWillNotBuild/ProjectThatWillNotBuild.csproj`);

        await assert.rejects(async () => {
            await buildCSharpProject(uri);

        }, TerminalError);
    }).timeout(10000);

    test("Ensure successful project build", async () => {

        const uri = vscode.Uri.file(`${__dirname}/../assets/projects/ProjectThatWillBuild/ProjectThatWillBuild.csproj`);

        // TODO: JE - Get rid of the try/catch...
        await assert.doesNotReject(async () => {
            try {
                await buildCSharpProject(uri);
            }
            catch (e: unknown) {
                console.log(JSON.stringify(e));
                throw e;
            }
        });
    }).timeout(10000);
});
