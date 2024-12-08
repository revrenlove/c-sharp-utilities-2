import * as assert from "assert";
import ConfigurationManager from "../configurationManager";

const configurationManager = ConfigurationManager.getInstance();

suite("ConfigurationManager Tests", () => {

    test("Ensure `isFileScopedNamespace` property", () => {

        const t = typeof configurationManager.isFileScopedNamespace;

        assert.strictEqual(t, "boolean");
    });

    test("Ensure `isImplicitUsings` property", () => {

        const t = typeof configurationManager.isImplicitUsings;

        assert.strictEqual(t, "boolean");
    });

    test("Ensure `namespacesToInclude` property", () => {

        assert.ok(Array.isArray(configurationManager.namespacesToInclude));

        assert.ok(!configurationManager.namespacesToInclude.every(n => typeof n !== "string"));
    });
});
