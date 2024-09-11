
// Find the Duplicate Number

// You are given an array arr containing n+1 integers, where each integer is in the range [1, n] inclusive. There is exactly one duplicate number in the array, but it may appear more than once. Your task is to find the duplicate number without modifying the array and using constant extra space.

// Input:
// An integer array arr of size n+1, where each element is an integer in the range [1, n].
// Example : arr = [3, 1, 3, 4, 2]

// Output:
// Return the duplicate integer present in the array.
// Example: Duplicate number: 3

// Constraints:
// 1 ≤ n ≤ 10^5.
// There is only one duplicate number, but it may appear more than once.
// You must not modify the array (arr) or use extra space greater than O(1).
// The time complexity must be O(n).

// Test Cases:
// Test Case 1
// Input: [1, 3, 4, 2, 2]
// Output: 2

// Test Case 2:
// Input: [3, 1, 3, 4, 2]
// Output: 3

// Test Case 3:
// Input: [1, 1]
// Output: 1

// Test Case 4:
// Input: [1, 4, 4, 2, 3]
// Output: 4

// Test Case 5:
// Input: [1, 2, 3, ..., 99999, 50000]
// Output: 50000

// Edge Cases:
// The smallest possible array with n = 1 where both elements are the same.
// Arrays where the duplicate number appears more than twice.




function findDuplicate(arr) {
    // Step 1: Initialize two pointers
    let slow = arr[0];
    let fast = arr[0];

    // Step 2: Move slow by one step and fast by two steps to detect cycle
    do {
        slow = arr[slow];
        fast = arr[arr[fast]];
    } while (slow !== fast);

    // Step 3: Find the entry point of the cycle (the duplicate number)
    slow = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;  // This is the duplicate number
}

// Test cases:
console.log(findDuplicate([1, 3, 4, 2, 2]));  // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2]));  // Output: 3
console.log(findDuplicate([1, 1]));           // Output: 1
console.log(findDuplicate([1, 4, 4, 2, 3]));  // Output: 4

console.log(findDuplicate([1, 1]));

// Additional test case with larger array
let largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
largeArray[50000] = 50000;
console.log(findDuplicate(largeArray));  // Output: 50000
