function removeDuplicates(arr) {
    // Create a new Set from the input array to remove duplicates
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array using the spread operator
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}
const inputArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const resultArray = removeDuplicates(inputArray);

console.log(resultArray);
// Output: [1, 2, 3, 4, 5]
