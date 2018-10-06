import { IToken, TokenType } from "../utils/IToken";
export default class Token implements IToken {
    type: TokenType;
    content: string;

    constructor(t: TokenType, c: string) {
        this.type = t;
        this.content = c;
    }
}