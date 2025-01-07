import { ExecException } from "child_process";

export interface ExecError extends ExecException {

    stdout: string;

    stderr: string;
}
