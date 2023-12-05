export type NodeType = 
    | "Program" 
    | "NumericLiteral" 
    | "Identifier"
    | "BinaryExpr";

export interface Stmt {
    kind: NodeType;
}

export interface Program extends Stmt {
    kind: "Program";
    body: Stmt[];
}

export interface Expr extends Stmt {}

export interface BinaryExpr extends Expr {
    kind: "BinaryExpr";
    left: Expr;
    Right: Expr;
    operator: string;
}

export interface Indentifier extends Expr {
    kind: "Identifier";
    symbol: string;
}

export interface NumericLiteral extends Expr {
    kind: "NumericLiteral";
    value: number;
}