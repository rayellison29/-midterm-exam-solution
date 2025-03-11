// Function to count the number of properties in an object
function countProperties(obj) {
    return Object.keys(obj).length;  // Using Object.keys() to get all property names and returning the length
}

// Example usage:
console.log(countProperties({ a: 1, b: 2, c: 3 }));  // Output: 3
