import { exec } from "child_process";
import { promisify } from "util";

const execPromisified = promisify(exec);

/**
 * Asynchronously execute a command
 * @param command - command to execute
 * @returns {Promise<string>} standard output
 * @throws {ExecAsyncError} Throws if there is anything returned in `stderr`
 */
async function execAsync(command: string): Promise<string> {

    const { stdout, stderr } = await execPromisified(command);

    if (stderr) {
        throw new ExecAsyncError(stderr, stdout);
    }

    return stdout;
}

class ExecAsyncError extends Error {

    /**
     * Standard output from `execAsync`
     */
    readonly stdout: string;

    constructor(stderr: string, stdout: string) {
        super(stderr);
        this.stdout = stdout;
    }
}

export default execAsync;
export { ExecAsyncError };
