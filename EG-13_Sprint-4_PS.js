// 09. Permutation in String

var checkInclusion = function (s1, s2) {
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const part = s2.substring(i, i + s1.length);

    if (s1.split("").sort().join("") === part.split("").sort().join("")) {
      return true;
    }
  }

  return false;
};

const s1 = "ab";
const s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));
