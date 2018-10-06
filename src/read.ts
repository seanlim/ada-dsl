import * as fs from "fs";
import * as path from "path";
import Lex from "./Lex";

export default function (fileName: string) {
    const sample = fs.readFileSync(path.join(__dirname, "..", fileName), {
        encoding: 'utf8',
    });

    Lex(sample);
}