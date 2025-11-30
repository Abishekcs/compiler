import type { AST } from "./ast.ts";

class Id implements AST {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  equals(other: AST): boolean {
    if(other instanceof Id) {
      return this.value === other.value;
    }
    return false;
  }
}
