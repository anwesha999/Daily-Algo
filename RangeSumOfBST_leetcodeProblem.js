/* 
Problem Statement-> Range SUm Of BST
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
Example 1:
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
*/

Solution:
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(!root){
        return null
    }else{
        let results = 0
        const dfs = function(node){
            if(!node)return null
            dfs(node.left)
            if(node.val>=low && node.val<=high){
                results = results + node.val
            }
            dfs(node.right)
        }
        dfs(root)
        return results
    }
};


