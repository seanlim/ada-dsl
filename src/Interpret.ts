import Node from "./model/Node";
import * as fs from "fs";
import Leaf from "./model/Leaf";

export default function(nodes: Node[]) {
  let temp: Object = {
    nodes: nodes.map(interpretNode),
    key: nodes.filter(n => n.kind === "ROOT_NODE")[0].name
  };

  fs.writeFile("out.json", JSON.stringify(temp, null, 2), err =>
    console.log(err || "")
  );
}

function interpretNode(node: Node): Object {
  let base: Object = {
    key: node.name,
    next: node.next
  };

  node.leafs.forEach(leaf => {
    if (leaf.kind === "Save") {
      base = {
        ...base,
        ...saveAs(leaf)
      };
    } else if (leaf.kind === "Say") {
      base = {
        ...base,
        ...say(leaf)
      };
    }
  });

  return base;
}

function saveAs(leaf: Leaf): Object {
  return {
    saveAs: {
      mapping: leaf.params,
      variables: leaf.variables
    }
  };
}

function say(leaf: Leaf): Object {
  return {
    ...leaf.params
  };
}
