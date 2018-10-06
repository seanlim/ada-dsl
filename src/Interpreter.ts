import * as os from "os";
import * as lex from "./lex";

export default function (input: string) {
    // Tokenize
    const tokens = lex.tokenize(input);
    // Maps nodes
    const nodes = lex.nodes(tokens);
}

function body() {

}

