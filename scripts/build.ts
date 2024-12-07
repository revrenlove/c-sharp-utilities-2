import * as fs from "fs";
import * as esbuild from "esbuild";
import { cpAsync, rmRfAsync } from "./fsUtil";
import buildConstants from "./buildConstants";

try {
    const entryPoints = [buildConstants.mainEntryPoint, buildConstants.testEntryPoint];

    await backupOutput();

    await rmRfAsync(buildConstants.outDirectory);

    await esbuild.build({
        bundle: true,
        outdir: buildConstants.outDirectory,
        format: "cjs",
        external: ["vscode"],
        platform: "node",
        minify: false,
        sourcemap: true,
        entryPoints: entryPoints,
    });

    await cpAsync(buildConstants.templatesSourceDirectory, buildConstants.templatesDestinationDirectory);

    await cpAsync(buildConstants.testAssetsSourceDirectory, buildConstants.testAssetsDestinationDirectory);

    await rmRfAsync(buildConstants.backupOutDirectory);
}
catch (e) {

    if (fs.existsSync(buildConstants.backupOutDirectory)) {

        console.error("An error occurred. Reverting to old build");

        await rmRfAsync(buildConstants.outDirectory);

        await cpAsync(buildConstants.backupOutDirectory, buildConstants.outDirectory);

        await rmRfAsync(buildConstants.backupOutDirectory);
    }

    throw e;
}

async function backupOutput(): Promise<void> {

    if (fs.existsSync(buildConstants.backupOutDirectory)) {
        await rmRfAsync(buildConstants.backupOutDirectory);
    }

    if (fs.existsSync(buildConstants.outDirectory)) {

        await cpAsync(buildConstants.outDirectory, buildConstants.backupOutDirectory);

        await rmRfAsync(buildConstants.outDirectory);
    }
}
