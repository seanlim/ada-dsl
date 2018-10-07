
import Regex from "./utils/Regex";
import Node from "./model/Node";
import regex from "./utils/Regex";

export default function (tokens: string[]) {
    // Map nodes
    let nodes: Node[] = [];
    let counter: number = 1;
    let currNode: Node;
    tokens.forEach((token, index) => {
        if (!currNode) {
            currNode = matchNode(token); // Parse Nodes
        }
        else {
            counter += token.match(Regex.BODY_OPEN) ? 1 : 0;
            counter -= token.match(Regex.BODY_CLOSE) ? 1 : 0;

            if (counter > 0) {
                currNode.body.push(token);
            } else {
                currNode.body = currNode.body.join("").split(";"); // Parse node body
                nodes.push(currNode);
                currNode = null;
                counter = 1;
            }
        }
    });

    console.info(nodes.map(n => n.kind));
}

function matchNode(tkn: string): Node {
    if (tkn.match(Regex.NODE)) {
        let node: Node = new Node("");
        if (tkn.match(Regex.ROOT_NODE)) {
            const params = tkn.match(Regex.ROOT_NODE);
            node.kind = "ROOT_NODE";
            node.name = "root";
            node.next = params[1];
        } else if (tkn.match(Regex.CHOICE_NODE)) {
            const params = tkn.match(Regex.CHOICE_NODE);
            node.kind = "CHOICE_NODE";
            node.name = params[1];
            node.next = params[2];
        } else if (tkn.match(Regex.HINT_NODE)) {
            const params = tkn.match(Regex.HINT_NODE);
            node.kind = "HINT_NODE";
            node.name = params[1];
            node.next = params[2];
        } else if (tkn.match(Regex.END_NODE)) {
            const params = tkn.match(Regex.END_NODE);
            node.kind = "END_NODE";
            node.name = "end";
            node.next = "dot";
        } else if (tkn.match(Regex.NORMAL_NODE)) {
            const params = tkn.match(Regex.NORMAL_NODE);
            node.kind = "NORMAL_NODE";
            node.name = params[1];
            node.next = params[2];
        }

        return node;
    }

    return null;
}





