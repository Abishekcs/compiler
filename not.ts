import type { AST } from "./ast.ts";

class Not implements AST {
  term: AST;

  constructor(term: AST) {
    this.term = term;
  }

  equals(other: AST): boolean {  
    if (other instanceof Not) {
      return this.term === other.term; 
    } 
    return false;
  }
}
