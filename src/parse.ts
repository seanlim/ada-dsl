
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
            currNode = matchNode(token);
        }
        else {
            counter += token.match(Regex.BODY_OPEN) ? 1 : 0;
            counter -= token.match(Regex.BODY_CLOSE) ? 1 : 0;

            if (counter > 0) {
                currNode.body.push(token);
            } else {
                nodes.push(currNode);
                currNode = null;
                counter = 1;
            }
        }
    });

    console.info(nodes);
}

function matchNode(tkn: string): Node {
    if (tkn.match(Regex.NODE)) {
        let node: Node = new Node("root");
        if (tkn.match(Regex.NODE_PARAMS_0)) {
            const params = tkn.match(Regex.NODE_PARAMS_0);
            node.name = params[1];
            node.next = params[2];
        }

        return node;
    }

    return null;
}

const getNextNode = (tkn: string): string => tkn.match(Regex.NEXT_NODE)[1];




