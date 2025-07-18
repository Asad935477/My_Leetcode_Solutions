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
 * @return {boolean}
 */

var solve = function (p, q) {
  if (p == null && q == null) return true;
  if ((p != null && q == null) || (p == null && q != null)) return false;
  if (p.val == q.val) {
    let left = solve(p.left, q.right);
    let right = solve(p.right, q.left);
    return left && right;
  }
  return false;
};
var isSymmetric = function (root) {
  if (root === null) return true;
  return solve(root.left, root.right);
};
