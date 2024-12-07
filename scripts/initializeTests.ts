// TODO: JE - This is where we will execute all the dotnet commands
//              to build out the projects for integration testing
import execAsync from "./execAsync";

const version = await execAsync("dotnet --version");

console.log(version);
