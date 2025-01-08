import * as fs from "fs/promises";
import * as path from "path";

// /home/runner/work/c-sharp-utilities-2/c-sharp-utilities-2/.github/workflows/actions/pre-build-test-projects
// const testProjectsDirectoryPath = `${__dirname}/../../`;
const testProjectsDirectoryPath = `${path.resolve()}/out/test/assets/projects`;
// const testProjectsDirectoryPath = `${path.resolve()}`;

const filePaths = await fs.readdir(testProjectsDirectoryPath);

filePaths.forEach(p => {
    console.log(p);
});
