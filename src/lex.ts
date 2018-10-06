import * as os from "os";
import { Node, NodeType } from "./utils/Node";

export default function (input: string) {
    let tokens = input
        .trim()
        .split(os.EOL)
        .filter(tkn => tkn != "");
    console.log(tokens);
}
