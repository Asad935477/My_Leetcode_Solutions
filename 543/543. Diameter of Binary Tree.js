/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  var Solve = (root) => {
    if (!root) return 0;
    let l = Solve(root.left);
    let r = Solve(root.right);
    diameter = Math.max(diameter, l + r);
    return Math.max(l, r) + 1;
  };
  Solve(root);
  return diameter;
};
