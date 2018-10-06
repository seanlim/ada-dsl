export default class Node {
    name: string;
    body: string[] = [];
    next: string;
    constructor(n: string) {
        this.name = n;
    }
}