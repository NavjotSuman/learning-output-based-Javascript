let arr = [[[4]], [5, 9, [[2], [3]]], 7]    //  required output : [4,5,9,2,3,7]
// console.log(arr.flat().flat().flat())




/**solution of this question -- I thik, this is best  */
function flatArray(arr, num) {
    const result = []

    for (let i = num; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            console.log(arr.flat());
            return flatArray(arr.flat(), i)
        }
        if (i == arr.length-1) {
            return arr
        }
    }
}
console.log("final result : ", flatArray(arr, 0))





/**solution of this question  */
// function findDepth(arr) {
//     if (!Array.isArray(arr)) {
//         return 0; // Base case: if it's not an array, return depth 0
//     }
//     let maxDepth = 0; // Initialize max depth
//     for (let i = 0; i < arr.length; i++) {
//         // Recursively call findDepth and compare depths
//         const currentDepth = findDepth(arr[i]);
//         maxDepth = Math.max(maxDepth, currentDepth);
//     }
//     return maxDepth + 1 // Add 1 for the current level
// }

// let depth = findDepth(arr);
// console.log(depth); // Outputs: 3