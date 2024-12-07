import * as fs from "fs";

async function rmRfAsync(path: fs.PathLike): Promise<void> {
    await fs.promises.rm(path, {
        recursive: true,
        force: true,
    });
}

async function cpAsync(source: string | URL, destination: string | URL): Promise<void> {
    await fs.promises.cp(source, destination, { recursive: true });
}

export { rmRfAsync, cpAsync };
