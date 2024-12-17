import { EasyVsCodeCommand } from "@revrenlove/easy-vscode-commands";
import { ExampleCommand } from "./example.command";
import { BuildCSharpProjectCommand } from "./buildCSharpProject.command";

const commands: EasyVsCodeCommand[] = [
    ExampleCommand,
    BuildCSharpProjectCommand,
];

export { commands };
