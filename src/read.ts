import * as fs from "fs";
import * as path from "path";
import Interpreter from "./Interpreter";

export default function (fileName: string) {
    const sample = fs.readFileSync(path.join(__dirname, "..", fileName), {
        encoding: 'utf8',
    });

    Interpreter(sample);
}