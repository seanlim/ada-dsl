export default {
    // Node
    NODE: /\b[A-Z]+[a-z]+\b(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    ROOT_NODE: /^Init -> ([a-zA-Z]+)/,
    END_NODE: /^End -> ([a-zA-Z]+)/,
    CHOICE_NODE: /Choices ([a-zA-Z]+) -> ([a-zA-Z]+)/,
    HINT_NODE: /Hints ([a-zA-Z]+) for ([a-zA-Z]+)/,
    NORMAL_NODE: / ([a-z][A-z]+) -> ([a-zA-Z]+)/, // params for non Hint, Root, and End nodes

    // Body
    BODY_OPEN: /{(?=(?:[^"]*"[^"]*")*[^"]*$)/,
    BODY_CLOSE: /(?=(?:[^"]*"[^"]*")*[^"]*$)}/,
    VALUES: /"(.*?)"/g,
};