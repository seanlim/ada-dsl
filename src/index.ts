import * as program from "commander";
import Read from "./Read";

let fileName: string = null;

program
  .version("0.1.0", "-v, --version")
  .arguments("<file>")
  .action((file: string) => (fileName = file))
  .parse(process.argv);

console.info(`reading from ${fileName}...`)

Read(fileName); 
