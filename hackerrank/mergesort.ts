/*
You are given two sorted arrays arr1 and arr2. Merge them into a single sorted array in non-decreasing order. 
*/

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
  
    // Step 1: Merge elements while both arrays have elements left
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Step 2: Append remaining elements from arr1 (if any)
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Step 3: Append remaining elements from arr2 (if any)
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Test cases
  console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
  console.log(mergeSortedArrays([0, 1, 2], [3, 4, 5])); // Output: [0, 1, 2, 3, 4, 5]
  console.log(mergeSortedArrays([], [1, 2, 3]));        // Output: [1, 2, 3]