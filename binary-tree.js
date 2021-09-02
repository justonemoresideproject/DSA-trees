/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  findDFS(val){
    const toVisitStack = [this];
    while(toVisitStack.length){
      const current = toVisitStack.pop();
      if(current.val === val){
        return current;
      }
      for(let child of current.children){
        toVisitStack.push(child)
      }
    }
  }

  findBFS(val){
    const toVisistQueue = [this];
    while(toVisistQueue.length){
      const current = toVisistQueue.shift();
      if(current.val === val){
        return current;
      }
      for(let child of current.children){
        toVisistQueue.push(child);
      }
    }
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // minDepth() {
  //   const toVisitStack = [this];
  //   let count = null;
  //   let tempCount = 0;
  //   while(toVisitStack.length){
  //     const current = toVisitStack.pop();
  //     if(current.left === null && current.right == null){
  //       if(tempCount < count || count === null){

  //         count = tempCount;
  //       }
  //       // tempCount--;
  //     } else if(current.left && current.right){
  //       tempCount++;
  //       toVisitStack.push(current.right)
  //       toVisitStack.push(current.left)
  //     } else if(current.left){
  //       tempCount++;
  //       toVisitStack.push(current.left)
  //     } else if(current.right){
  //       tempCount++;
  //       toVisitStack.push(current.right)
  //     } else if(current.root){
  //       toVisitStack.push(current.root)
  //     }
  //     console.log(current)
  //     tempCount--;
  //   }
  //   return count;
  // }

  minDepth(){
    if(!this.root) return 0;
    
    function recursiveMin(val){
      if(!val.left && !val.right){
        return 1;
      } else if(val.left && val.right){
        const left = 1 + recursiveMin(val.left);
        const right = 1 + recursiveMin(val.right);
        return left < right ? left : right;
      } else if(val.left && !val.right){
        const left = 1 + recursiveMin(val.left);
        return left;
      } else if(!val.left && val.right){
        const right = 1 + recursiveMin(val.left);
        return right;
      }
    }
    return recursiveMin(this.root)  
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    
    function recursiveMax(val){
      if(!val.left && !val.right){
        return 1;
      } else if(val.left && val.right){
        const left = 1 + recursiveMax(val.left);
        const right = 1 + recursiveMax(val.right);
        return left > right ? left : right;
      } else if(val.left && !val.right){
        const left = 1 + recursiveMax(val.left);
        return left;
      } else if(!val.left && val.right){
        const right = 1 + recursiveMax(val.left);
        return right;
      }
    }
    return recursiveMax(this.root)  
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;
    
    function recursiveSum(node){
      if(!node.left && !node.right){
        return node.val;
      } else if(node.left && node.right){
        const left = node.val + recursiveSum(node.left);
        const right = node.val + recursiveSum(node.right);
        return left > right ? left : right;
      } else if(node.left && !node.right){
        const left = node.val + recursiveSum(node.left);
        return left;
      } else if(!node.left && node.right){
        const right = node.val + recursiveSum(node.left);
        return right;
      }
    }
    return recursiveSum(this.root)  
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // nextLarger(lowerBound) {
  //   if(!this.root) return null;
  //   let count = null;
    
  //   function recLarger(node){
  //     if(count == null && node.val > lowerBound){
  //       count = node.val
  //     }
  //     if(!node.left && !node.right){
  //       return count > node.val > lowerBound ? node.val : count;
  //     } else if(node.left && node.right){
  //       const currComparison = count > node.val > lowerBound ? node.val : count;
  //       const left = currComparison > recLarger(node.left) > lowerBound ? recLarger(node.left) : currComparison;
  //       const right = currComparison > recLarger(node.right) > lowerBound ? recLarger(node.right) : currComparison;
  //       return left < right ? left : right;
  //     } else if(node.left && !node.right){
  //       return count > node.val > lowerBound ? node.val : recLarger(node.left)
  //     } else if(!node.left && node.right){
  //       return count > node.val > lowerBound ? node.val : recLarger(node.right)
  //     }
  //   }

  //   return recLarger(this.root)  
  // }

  nextLarger(lowerBound){
    const toVisistQueue = [this.root];
    let count = null;
    while(toVisistQueue.length){
      const current = toVisistQueue.shift();
      console.log(`Count: ${count} Current.val: ${current.val}`)
      if(count > current.val && current.val > lowerBound){
        count = current.val;
      } else if(count == null && current.val > lowerBound){
        count = current.val;
      }

      if(current.left && current.right){
        toVisistQueue.push(current.left)
        toVisistQueue.push(current.right)
      } else if(current.left){
        toVisistQueue.push(current.left)
      } else if(current.right){
        toVisistQueue.push(right)
      }
    }
    return count;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */


  // stack1, stack2 -> fill first row in stack1 fill second row in stack 2, check if nodes are in first stack1, check if nodes are in stack2, empty stack1, refill stack1 with third row, empty second stack, refill second stack with fourth row, repeat
  areCousins(node1, node2) {
    const stack1 = [this.root];
    const stack2 = [];

    while(stack1.length || stack2.length){
      if(stack1.includes(node1) && stack1.includes(node2)){
        return true;
      } else if(stack2.includes(node1) && stack2.includes(node2)){
        return true;
      }

      while(stack1.length){
        const current = stack1.shift();
        if(current.left && current.right){
          stack2.push(current.left)
          stack2.push(current.right)
        } else if(current.left){
          stack2.push(current.left)
        } else if(current.right){
          stack2.push(current.right)
        }
      }

      while(stack2.length){
        const current = stack2.shift();
        if(current.left && current.right){
          stack1.push(current.left)
          stack1.push(current.right)
        } else if(current.left){
          stack1.push(current.left)
        } else if(current.right){
          stack1.push(current.right)
        }
      }
    }
    return false;
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  serialize() {
    const toVisitStack = [this.root];
    let string = '';
    while(toVisitStack.length){
      const current = toVisitStack.pop();
      // console.log(current)
      if(current == null){
        string += 'n ';
      } else {
        string += current.val + ' ';
        toVisitStack.push(current.right)
        toVisitStack.push(current.left)
      } 
    }
    return string;
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  // [ 6 5 null null 5 3 2 null null 1 null null 1 null null ]
  // start from end, if null, set to current.right if null again set to current.left, then set third element as current.val, otherwise just create new node. Once nodes are made, set the first node (last node made) as root, then set current.left to be next node unless next is null null. Then go back to original node and set current.right to next node. Recursion would work

  deserialize(string) {
    const deparsed = [];
    for(let i = 0; i < string.length; i++){
      if(string[i] == 'n'){
        deparsed.push(string[i])
      } else if(!isNaN(parseInt(string[i]))){
        deparsed.push(parseInt(string[i]))
      }
    }
    console.log(deparsed)
    // const nodeStack = [];
    // for(let i = deparsed.length - 1; i > 1; i--){
    //   if(string[i] == 'n'){
    //     i = i - 2;
    //     let newNode = new BinaryTreeNode(string[i]);
    //     nodeStack.unshift(newNode)
    //   }
    // }

    function recDes(arr){
      if(arr[0] == 'n'){
        arr.shift();
        return null;
      } 
      const currentVal = arr.shift();

      return new BinaryTreeNode(currentVal, recDes(arr), recDes(arr));
    }
    return recDes(deparsed)
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
