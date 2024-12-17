// TODO: JE - Does this need to be abstract?
export class CSharpUtilitiesExtensionError extends Error {

    public constructor(message: string) {
        super(message);
    }

    public get className(): string {
        return this.constructor.name;
    }
}
