// Trapping Rain Water

// You are given an array height[] of non-negative integers where each element represents the height of a bar in a histogram-like structure. These bars are placed next to each other, and the width of each bar is 1 unit. When it rains, water gets trapped between the bars if there are taller bars on both the left and right of the shorter bars. The task is to calculate how much water can be trapped between these bars after the rain.

// The amount of water trapped above any bar is determined by the difference between the height of the bar and the minimum height of the tallest bars on its left and right. For example, if a bar is surrounded by taller bars, the water will be trapped above it, filling the space up to the height of the shorter of the two taller bars.

// Input:
// An integer array height[] where each element represents the height of a bar in the histogram.
// Example : 
// height[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// Output:
// An integer representing the total units of water that can be trapped between the bars.
// Water can be trapped in the following positions:
// At index 2: Water trapped = 1 unit (bounded by heights 1 and 2).
// At index 5: Water trapped = 2 units (bounded by heights 2 and 3).
// At index 6: Water trapped = 1 unit (bounded by heights 2 and 3).
// At index 9: Water trapped = 1 unit (bounded by heights 3 and 2).
// The total amount of water trapped = 1 + 2 + 1 + 1 + 1 = 6 units.

// Constraints:
// 1 ≤ height.length ≤ 2 × 10^5 (The array can have up to 200,000 elements)
// 0 ≤ height[i] ≤ 10^4 (Each bar height is between 0 and 10,000)



// Test Cases:
// Input: height[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// Output: 6

// Input: height[] = [4, 2, 0, 3, 2, 5]
// Output: 9

// Input: height[] = [1, 1, 1]
// Output: 0

// Input: height[] = [5]
// Output: 0

// Input: height[] = [2, 0, 2]
// Output: 2

// Edge Cases:
// All bars have height 0: No water will be trapped as there are no heights to form boundaries.
// Array with less than 3 bars: No water can be trapped between less than three bars.
// Array with increasing or decreasing heights: If the array is strictly increasing or decreasing, no water will be trapped.



function trapRainWater(height) {
    let left = 0, right = height.length - 1;
    let left_max = 0, right_max = 0;
    let trapped_water = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left]; // Update left_max
            } else {
                trapped_water += left_max - height[left]; // Calculate trapped water
            }
            left++; // Move left pointer
        } else {
            if (height[right] >= right_max) {
                right_max = height[right]; // Update right_max
            } else {
                trapped_water += right_max - height[right]; // Calculate trapped water
            }
            right--; // Move right pointer
        }
    }

    return trapped_water;
}

// Example Test Cases
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trapRainWater([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trapRainWater([1, 1, 1])); // Output: 0
console.log(trapRainWater([5])); // Output: 0
console.log(trapRainWater([2, 0, 2])); // Output: 2
