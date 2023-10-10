const lengthOfLastWord = (s) => {
  let count = 0,
    i = s.length - 1;
  while (i >= 0 && s[i--] === " ");
  while (i >= 0 && s[i--] !== " ") count++;
  return count;
};

console.log(lengthOfLastWord(" hwloe hwo youyou  ")); // Expected output: 6




function lengthOfLastWord(s) {
  // Initial count is zero.
  let count = 0;
  let i = s.length - 1; // Start from the end of the string.

  // Skip over trailing spaces.
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count characters of the last word.
  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
}

// Testing the function
const str = "Hello World";
console.log(lengthOfLastWord(str)); // Expected output: 5
