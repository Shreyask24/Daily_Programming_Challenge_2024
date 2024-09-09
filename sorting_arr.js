// Problem: Sort an Array of 0s, 1s, and 2s
// You are given an array arr consisting only of 0s, 1s, and 2s. The task is to sort the array in increasing order in linear time (i.e., O(n)) without using any extra space. This means you need to rearrange the array in-place.

// Input :
// An integer array arr of size n where each element is either 0, 1, or 2.
// Example : arr = [0, 1, 2, 1, 0, 2, 1, 0]

// Output :
// The sorted array, arranged in increasing order of 0s, 1s, and 2s.
// Example: [0, 0, 0, 1, 1, 1, 2, 2]


// let arr = [0, 1, 2, 1, 0, 2, 1, 0]

// let newarr = arr.sort()
// console.log(newarr)


function sortArr(arr) {
    let low = 0, mid = 0, high = arr.length - 1

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];       //It will swap the elements between low value & middle value
            low++;
            mid++
        }
        else if (arr[mid] == 1) {
            mid++
        }
        else if (arr[mid] == 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];     //It will swap the elements between middle value & high value
            high--
        }
    }
    return arr
}

console.log(sortArr([0, 1, 2, 1, 0, 2, 1, 0]))
