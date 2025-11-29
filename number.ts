import type { AST } from './ast.ts'

class Number implements AST {
  value: number;
  
  constructor(value: number) {
    this.value = value;
  }
  
  equals(other: AST): boolean {
    if (other instanceof Number) {
      return this.value === other.value
    }
    return false
  }
}
