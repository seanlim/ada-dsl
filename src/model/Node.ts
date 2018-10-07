export default class Node {
    kind: string;
    name: string;
    body: string[] = [];
    values: string[] = [];
    next: string;
    constructor(n: string) {
        this.name = n;
    }
}