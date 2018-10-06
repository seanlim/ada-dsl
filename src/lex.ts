import * as os from "os";
import { TokenType } from "./utils/IToken";
import Token from "./models/Token";

// Normalise and tokenize raw code
export default function (input: string) {
    let tokens = input
        .trim()
        .split(os.EOL)
        .filter(tkn => tkn != "");
    console.log(tokens);
}
