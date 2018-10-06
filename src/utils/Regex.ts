export default {
    NODE: /\b[A-Z]+[a-z]+\b(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    ROOT_NODE: /^Init -> ([a-zA-Z]+)/,
    END_NODE: /^End -> ([a-zA-Z]+)/,
    NODE_PARAMS: / ([a-z][A-z]+) -> ([a-zA-Z]+)/, // params for non Hint, Root, and End nodes
    BODY_OPEN: /{(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    BODY_CLOSE: /(?=(?:[^"]*"[^"]*")*[^"]*$)}/,
    NEXT_NODE: /-> (\w+)/
};