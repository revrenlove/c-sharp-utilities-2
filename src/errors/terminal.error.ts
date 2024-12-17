import { CSharpUtilitiesExtensionError } from "./cSharpUtilitiesExtension.error";

export class TerminalError extends CSharpUtilitiesExtensionError {

    constructor(stdout: string, stderr: string) {

        super(stderr);

        this.stdout = stdout;
        this.stderr = stderr;
    }

    public stdout: string;

    public stderr: string;
}
