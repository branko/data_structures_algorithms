def word_break(str, words, memo={})
  return true if words.include?(str)

  (1...str.length).each do |i|
    left =  memo[str[0...i]].nil? ?          word_break(str[0...i], words, memo)          : memo[str[0...i]]
    right = memo[str[i...str.length]].nil? ? word_break(str[i...str.length], words, memo) : memo[str[i...str.length]]

    if left && right
      memo[str] = true
      return true
    end
  end

  memo[str] = false
  return memo[str]
end