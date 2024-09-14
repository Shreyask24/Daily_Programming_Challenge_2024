// Find All Subarrays with Zero Sum

// You are given an integer array arr of size n. Your task is to find all the subarrays whose elements sum up to zero. A subarray is defined as a contiguous part of the array, and you must return the starting and ending indices of each subarray.

// Input:
// An integer array arr of size n where n represents the number of elements in the array.
// Example : 
// Input: [1, 2, -3, 3, -1, 2]

// Output:
// Return a list of tuples, where each tuple contains two integers. The starting index (0-based) of the subarray. The ending index (0-based) of the subarray.
// The output should list all subarrays that sum to zero. If no such subarrays are found, return an empty list.
// Example
// Output: [(0, 2), (1, 3)]

// Explanation
// Subarray [1, 2, -3] (from index 0 to 2) has a sum of 0.
// Subarray [2, -3, 3] (from index 1 to 3) also has a sum of 0.

// Constraints:
// 1 ≤ n ≤ 10^5 (Array length can be up to 100,000)
// -10^9 ≤ arr[i] ≤ 10^9 (Elements of the array can range from -1 billion to 1 billion)
// The input array can contain both positive and negative integers, including zero.

// Test Cases:
// Input: [4, -1, -3, 1, 2, -1]
// Output: [(1, 2), (0, 3)]
// Input: [1, 2, 3, 4]
// Output: []
// Input: [0, 0, 0]
// Output: [(0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2)]
// Input: [-3, 1, 2, -3, 4, 0]
// Output: [(0, 3), (4, 4)]
// Input: [1, -1, 2, -2, 3, -3] * 10^4
// Output: [(0, 1), (2, 3), ..., (19998, 19999)]

// Edge Cases:
// If the array contains only a single element 0, it is considered a subarray with zero sum, as [0] sums to 0.
// If all elements in the array are zero, every possible subarray will sum to zero.
// Handle cases where positive and negative numbers cancel each other out to sum to zero.
// Ensure the algorithm performs efficiently for large arrays with repeated patterns that sum to zero.


function findSubarraysWithZeroSum(arr) {
    let prefixSum = 0;
    let sumMap = new Map();
    let result = [];

    // Initialize the map with prefix sum 0 at index -1 to handle subarrays starting from index 0
    sumMap.set(0, [-1]);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // If prefixSum is already in the map, we have found a subarray with sum 0
        if (sumMap.has(prefixSum)) {
            let indices = sumMap.get(prefixSum);
            for (let start of indices) {
                result.push([start + 1, i]);  // Push the subarray (start + 1, i)
            }
            // Add the current index to the list of indices for this prefixSum
            indices.push(i);
        } else {
            // Otherwise, just store the current index for this prefixSum
            sumMap.set(prefixSum, [i]);
        }
    }

    return result;
}

// Example Test Cases
console.log(findSubarraysWithZeroSum([1, 2, -3, 3, -1, 2])); // Output: [(0, 2), (1, 3)]
console.log(findSubarraysWithZeroSum([4, -1, -3, 1, 2, -1])); // Output: [(1, 2), (0, 3)]
console.log(findSubarraysWithZeroSum([1, 2, 3, 4])); // Output: []
console.log(findSubarraysWithZeroSum([0, 0, 0])); // Output: [(0, 0), (0, 1), (0, 2), (1, 1), (1, 2), (2, 2)]
console.log(findSubarraysWithZeroSum([-3, 1, 2, -3, 4, 0])); // Output: [(0, 3), (4, 4)]
