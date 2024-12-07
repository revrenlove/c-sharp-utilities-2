const outDirectory = "./out";
const backupOutDirectory = "./out.backup";

const mainEntryPoint = "./src/extension.ts";
const testEntryPoint = "./src/test/**/*.ts";

const templatesSourceDirectory = "./src/templates";
const templatesDestinationDirectory = `${outDirectory}/templates`;

const testAssetsSourceDirectory = "./src/test/assets";
const testAssetsDestinationDirectory = `${outDirectory}/test/assets`;

export default {
    outDirectory,
    backupOutDirectory,
    mainEntryPoint,
    testEntryPoint,
    templatesSourceDirectory,
    templatesDestinationDirectory,
    testAssetsSourceDirectory,
    testAssetsDestinationDirectory,
};
