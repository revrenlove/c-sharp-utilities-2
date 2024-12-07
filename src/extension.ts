import * as vscode from "vscode";
import { registerCommands } from "@revrenlove/easy-vscode-commands";
import { commands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
    registerCommands(context, commands);
}
