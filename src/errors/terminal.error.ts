import { CSharpUtilitiesExtensionError } from "./cSharpUtilitiesExtension.error";
import { ExecError } from "./exec.error";

export class TerminalError extends CSharpUtilitiesExtensionError implements ExecError {

    public constructor(e: ExecError) {

        super(e.message);

        this.stdout = e.stdout;
        this.stderr = e.stderr;

        this.cmd = e.cmd;
        this.killed = e.killed;
        this.code = e.code;
        this.signal = e.signal;
    }

    public readonly stdout: string;

    public readonly stderr: string;

    public cmd?: string | undefined;

    public killed?: boolean | undefined;

    public code?: number | undefined;

    public signal?: NodeJS.Signals | undefined;
}
