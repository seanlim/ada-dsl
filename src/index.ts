import * as program from "commander";

let fileName: string = null;

program
  .version("0.1.0", "-v, --version")
  .arguments("<file>")
  .action((file: string) => (fileName = file))
  .parse(process.argv);

console.log(`will run ${fileName}`);
