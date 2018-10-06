import * as os from "os";
import { Node, NodeType } from "./utils/Node";

export default function (input: string): string[] {
    return input.trim().split(os.EOL);
}
