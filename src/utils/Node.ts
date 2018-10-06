
export enum NodeType {
    INIT = "Init",
    NODE = "Node",
    CHOICES = "Choices",
    HINTS = "Hints",
    END = "End"
}

export interface Node {
    type: NodeType;
    key: string;
    next?: Node;
    body: string[]; // Collection of statements
}