// 08. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        first = i;
      }

      last = i;
    }
  }

  return [first, last];
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(searchRange(nums, target));
