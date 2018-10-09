import Node from "./model/Node";
import * as fs from "fs";

export default function(nodes: Node[]) {
  console.info(nodes);

  let temp: Object = {
    nodes: nodes.map(interpretNode),
    key: nodes.filter(n => n.kind === "ROOT_NODE")[0].name
  };

  fs.writeFile("out.json", JSON.stringify(temp, null, 2), err =>
    console.log(err)
  );
}

function interpretNode(node: Node): Object {
  return {
    key: node.name,
    next: node.next
  };
}
