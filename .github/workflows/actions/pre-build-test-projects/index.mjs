import * as fs from "fs/promises";
import * as path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const testProjectsDirectoryPath = `${path.resolve()}/out/test/assets/projects`;

const filePaths = (await fs.readdir(testProjectsDirectoryPath)).map(p => `${testProjectsDirectoryPath}/${p}`);

filePaths.forEach(async p => {
    try {
        // const execResult = await execAsync("dotnet build", { "cwd": p });
        console.log(`Attempting to build: ${p}`);
        await execAsync("dotnet build", { "cwd": p });

        // return execResult.stdout;
    }
    catch (e) {
        console.log("Errors are normal - some of the projects won't build, and that's by design.");
        console.log(JSON.stringify(e));
    }
});
