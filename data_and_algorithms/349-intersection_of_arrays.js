var intersection = function(nums1, nums2) {
  if (nums1.length === 0 || nums1.length === 0) { return [] }
  let intersectionArray = [];
  let seen = {};

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {

      if (nums1[i] === nums2[j] && !seen[nums1[i]]) {
        intersectionArray.push(nums1[i])
        seen[nums1[i]] = true;
      }

    }
  }

  return intersectionArray
};

var intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums1.length === 0) { return [] };

  let intersectionArray = [];
  let seen1 = [];
  let seen2 = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {

      if (nums1[i] === nums2[j] && !seen1[i] && !seen2[j]) {
        intersectionArray.push(nums1[i]);
        seen1[i] = true;
        seen2[j] = true;
      }
    }
  }

  return intersectionArray.sort()
};

console.log(intersect([3, 1, 2], [1, 1]))


