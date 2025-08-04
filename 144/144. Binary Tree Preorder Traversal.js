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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = [];
  preorder(root);
  function preorder(root) {
    if (!root) return null;
    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  return result;
};
