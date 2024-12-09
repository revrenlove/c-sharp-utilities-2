import * as vscode from "vscode";
import { ExtensionName } from "./constants";

class ConfigurationManager {

    private static instance: ConfigurationManager | undefined;

    private constructor() { }

    static getInstance(): ConfigurationManager {

        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }

        return ConfigurationManager.instance;
    }

    get isFileScopedNamespace(): boolean {
        return this.getConfigurationValue<boolean>("newItemTemplate.fileScopedNamespace");
    }

    get isImplicitUsings(): boolean {
        return !this.getConfigurationValue<boolean>("newItemTemplate.includeUsingStatements");
    }

    get namespacesToInclude(): string[] {
        return this.getConfigurationValue<string[]>("newItemTemplate.namespacesToInclude");
    }

    private getConfigurationValue<T>(section: string): T {

        const configuration = vscode.workspace.getConfiguration(ExtensionName);

        const configurationValue = configuration.get(section);

        const typedConfigurationValue = configurationValue as T;

        return typedConfigurationValue;
    }
}

export default ConfigurationManager;
