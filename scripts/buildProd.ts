import * as esbuild from "esbuild";
import buildConstants from "./buildConstants";
import { cpAsync, rmRfAsync } from "./fsUtil";

await rmRfAsync(buildConstants.outDirectory);

await esbuild.build({
    bundle: true,
    outdir: buildConstants.outDirectory,
    format: "cjs",
    external: ["vscode"],
    platform: "node",
    minify: true,
    sourcemap: false,
    entryPoints: [buildConstants.mainEntryPoint],
});

await cpAsync(buildConstants.templatesSourceDirectory, buildConstants.templatesDestinationDirectory);
