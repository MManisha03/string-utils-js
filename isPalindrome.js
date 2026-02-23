/**
 * Check if a string is a palindrome
 * - ignores spaces, punctuation, and case
 * @param {string} input
 * @returns {boolean}
 */
//i want to do a small change here
//again i want to try 
//last try
function isPalindrome(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
