function foo(a, b) {
  if (a === null || b === null) {
    return null; // Corrected: Return null
    //throw new Error('Null values are not allowed.'); //Alternative: throw an error
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(null, null));// Output: null