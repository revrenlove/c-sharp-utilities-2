import * as fs from "fs/promises";

// /home/runner/work/c-sharp-utilities-2/c-sharp-utilities-2/.github/workflows/actions/pre-build-test-projects
// const testProjectsDirectoryPath = `${__dirname}/../../`;
const testProjectsDirectoryPath = `${__dirname}/../../../../out/test/assets/projects`;

const filePaths = await fs.readdir(testProjectsDirectoryPath);

filePaths.forEach(p => {
    console.log(p);
});
