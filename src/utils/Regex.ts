export default {
    NODE: /\b[A-Z]+[a-z]+\b(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    NODE_PARAMS_0: / ([a-z][A-z]+) -> ([a-zA-Z]+)/, // name and next node for non Hint, Root, and End nodes
    BODY_OPEN: /{(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    BODY_CLOSE: /(?=(?:[^"]*"[^"]*")*[^"]*$)}/,
    NEXT_NODE: /-> (\w+)/
};