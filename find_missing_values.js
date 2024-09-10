
// You are given an array arr containing n-1 distinct integers. The array consists of integers taken from the range 1 to n, meaning one integer is missing from this sequence. Your task is to find the missing integer.

// Input:
// An integer array arr of size n-1 where the elements are distinct and taken from the range 1 to n.
// Example : arr = [1, 2, 4, 5]

// Output:
// Return the missing integer from the array.
// Example: Missing number: 3

// Constraints:
// The array contains exactly n-1 distinct integers, and all integers are in the range [1, n].
// You must solve the problem with a time complexity of O(n).
// The space complexity should be O(1) (constant space).
// 1 ≤ n ≤ 10^6

// Test Cases:
// Test Case 1
// Input: [1, 2, 4, 5]
// Output: 3
// Test Case 2:
// Input: [2, 3, 4, 5]
// Output: 1
// Test Case 3:
// Input: [1, 2, 3, 4]
// Output: 5
// Test Case 4:
// Input: [1]
// Output: 2
// Test Case 5:
// Input: [1, 2, 3, ..., 999999]
// Output: 1000000

// Edge Cases:
// The smallest possible array where n = 2. The missing number can only be 1 or 2.
// The largest possible array where n = 10^6.


function findMissingValues(arr, n) {
    let totalSum = (n * (n + 1)) / 2                            // Calculate the sum of the first n natural numbers
    let arraySum = arr.reduce((acc, val) => acc + val, 0)       // Calculate the sum of elements in the array
    return totalSum - arraySum                                  // The missing number is the difference between the totalSum and arraySum
}

let arr1 = [1, 2, 4, 5];
let arr2 = [2, 3, 4, 5];
let arr3 = [1, 2, 3, 4];
let arr4 = [1];
let arr5 = Array.from({ length: 999999 }, (_, i) => i + 1);

console.log(findMissingValues(arr1, 5));  // Output: 3
console.log(findMissingValues(arr2, 5));  // Output: 1
console.log(findMissingValues(arr3, 5));  // Output: 5
console.log(findMissingValues(arr4, 2));  // Output: 2
console.log(findMissingValues(arr5, 1000000));  // Output: 2