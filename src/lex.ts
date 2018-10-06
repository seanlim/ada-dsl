import * as os from "os";
import Parse from "./Parse";

// Normalise and tokenize raw code
export default function (input: string) {
    let tokens = input
        .trim()
        .split(os.EOL)
        .filter(tkn => tkn != "")
        .map(tkn => tkn.trim());
    Parse(tokens);
}
