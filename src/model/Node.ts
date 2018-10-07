export default class Node {
    kind: string;
    name: string;
    body: string[] = [];
    next: string;
    constructor(n: string) {
        this.name = n;
    }
}