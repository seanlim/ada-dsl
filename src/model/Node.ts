export default class Node {
  kind: string;
  name: string;
  next: string;
  variables: string[];
  values: string[] = [];
  body: string[] = [];
  nodes: Node[] = [];
  constructor(n: string) {
    this.name = n;
  }
}
