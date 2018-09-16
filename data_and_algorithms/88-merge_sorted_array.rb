def merge(nums, m, nums2, n)
  i = 0
  j = 0

  while i < m && j < n
    while i < m && nums[i] <= nums2[j]
      i += 1
    end

    while j < n && nums[i] > nums2[j]
      nums.insert(i, nums2[j])
      nums.pop()

      j += 1
      m += 1
    end
  end

  while j < n
    nums[m] = nums2[j]
    j += 1
    m += 1
  end

  return nums
end

p merge([1,2,3,0,0], 3, [2,3], 2)