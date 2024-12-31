import { ExecException } from "child_process";
import { CSharpUtilitiesExtensionError } from "./cSharpUtilitiesExtension.error";

export class TerminalError extends CSharpUtilitiesExtensionError implements ExecException {

    // TODO: JE - Figure out about this constructor...
    constructor(stdout: string, stderr: string) {

        super(stderr);

        this.stdout = stdout;
        this.stderr = stderr;
    }

    public stdout: string;

    public stderr: string;

    public cmd?: string | undefined;

    public killed?: boolean | undefined;

    public code?: number | undefined;

    public signal?: NodeJS.Signals | undefined;
}
