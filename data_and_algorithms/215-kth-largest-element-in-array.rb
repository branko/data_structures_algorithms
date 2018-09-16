def partition!(arr, left_pointer = 0, right_pointer = arr.length - 1)
  pivot = arr[left_pointer]
  i = left_pointer - 1
  j = right_pointer + 1

  while true
    while i != j
      i += 1
      p [i, j]
      break if arr[i] >= pivot
    end

    while i != j
      j -= 1
      p [i, j]

      break if arr[j] <= pivot
    end
    return j if i >= j

    arr[i], arr[j] = arr[j], arr[i]
  end
end


def find_kth_largest(arr, k)
  pivot = partition!(arr)
  position_from_left = arr.length - k
  while true

    p [pivot, position_from_left, pivot + 1, arr.length - 1]

    if pivot < position_from_left
      pivot = partition!(arr, pivot + 1, arr.length - 1)
    elsif pivot > position_from_left
      pivot = partition!(arr, 0, pivot)
    else
      return arr[pivot]
    end
  end
end

arr = [3,2,1,5,6,4]


p find_kth_largest(arr, 2)
p arr

