import * as program from "commander";
import Read from "./Read";

let fileName: string = "";

program
  .version("0.1.0", "-v, --version")
  .arguments("<file>")
  .action((file: string) => (fileName = file))
  .parse(process.argv);

console.info(`compiling ${fileName}...`);

Read(fileName);
