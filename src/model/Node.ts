import Leaf from "./Leaf";

export default class Node {
  kind: string;
  name: string;
  next: string;
  variables: string[];
  values: string[] = [];
  body: string[] = [];
  leafs: Leaf[] = [];
  constructor(n: string) {
    this.name = n;
  }
}
