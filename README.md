# removeDuplicates
To remove duplicates from an array, we can use a JavaScript Set data structure. A Set is a collection of unique values, so by converting the array to a Set and then back to an array, we automatically remove any duplicate elements.
Thought Process:

    The function removeDuplicates takes an array arr as input.
    We create a new Set called uniqueSet, which automatically removes any duplicate elements from the input array. A Set only stores unique values, and any duplicate values in the array will be discarded.
    We convert the uniqueSet back to an array called uniqueArray using the spread operator ([...uniqueSet]). The spread operator unpacks the elements of the Set into a new array.
    We return the uniqueArray, which now contains the elements of the input array with duplicates removed.

Edge Cases to Consider:

    Empty Array: If the input array is empty, the function should return an empty array since there are no elements and thus no duplicates to remove.
    Array with No Duplicates: If the input array has no duplicates, the function should return the same array since there are no duplicates to remove.
    Array with All Duplicates: If the input array contains only duplicates and no unique elements, the function should return an array with a single occurrence of each element, effectively removing the duplicates.
    In this example, the removeDuplicates function removes duplicates from the inputArray and returns a new array resultArray with unique elements [1, 2, 3, 4, 5].
