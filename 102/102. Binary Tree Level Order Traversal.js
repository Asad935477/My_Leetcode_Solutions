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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = [];
  if (root === null) return ans;
  let q = [];
  q.push(root);
  while (q.length != 0) {
    let len = q.length;
    cur = [];
    temp = 0;
    for (let i = 0; i < len; i++) {
      temp = q.shift(i);
      cur.push(temp.val);
      if (temp.left != null) {
        q.push(temp.left);
      }
      if (temp.right != null) {
        q.push(temp.right);
      }
    }
    ans.push(cur);
  }
  return ans;
};
