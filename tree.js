/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisistQueue = [this];
    let sum = 0;
    while(toVisistQueue.length){
      const current = toVisistQueue.shift();
      sum += current.val;
      for(let child of current.children){
        toVisistQueue.push(child);
      }
    }
  return sum;    
}

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisistQueue = [this];
    let count = 0;
    while(toVisistQueue.length){
      const current = toVisistQueue.shift();
      if(current.val % 2 == 0){
        count++;
      }
      for(let child of current.children){
        toVisistQueue.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toVisistQueue = [this];
    let count = 0;
    while(toVisistQueue.length){
      const current = toVisistQueue.shift();
      if(current.val > lowerBound){
        count++;
      }
      for(let child of current.children){
        toVisistQueue.push(child);
      }
    }
  }
}

module.exports = { Tree, TreeNode };
