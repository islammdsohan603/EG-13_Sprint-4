// 10. Find All Anagrams in a String

var findAnagrams = function (s, p) {
  const result = [];

  const sortedP = p.split("").sort().join("");

  for (let i = 0; i <= s.length - p.length; i++) {
    const part = s.substring(i, i + p.length);

    const sortedPart = part.split("").sort().join("");

    if (sortedPart === sortedP) {
      result.push(i);
    }
  }

  return result;
};

const s = "cbaebabacd";
const p = "abc";

console.log(findAnagrams(s, p));
