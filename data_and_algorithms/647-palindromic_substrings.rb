# def count_substrings(str, p1=0, p2=str.length-1, memo={})

#   if memo[str[p1..p2]] && memo[[p1, p2]].nil?
#     memo[[p1, p2]] = memo[str[p1..p2]]
#     return memo[str[p1..p2]] 
#   end

#   return 0 if p2 < p1

#   if p1 == p2
#     memo[[p1, p2]] = 1
#     memo[str[p1..p2]] = 1
#     return 1
#   end

#   sum = 0

#   (0...p2 - p1).each do |i|
#     sum += memo[[p1, p1 + i]].nil?     ? count_substrings(str, p1, p1 + i, memo)     : 0
#     sum += memo[[p1 + i + 1, p2]].nil? ? count_substrings(str, p1 + i + 1, p2, memo) : 0
#   end

#   sum += str[p1..p2] == str[p1..p2].reverse ? 1 : 0
#   memo[[p1, p2]] = sum
#   memo[str[p1..p2]] = sum
#   p memo

#   return memo[[p1, p2]]
# end

def count_substrings(str)
  
end

# p count_substrings('a') == 1
# p count_substrings('') == 0
# p count_substrings('aaa') == 6
p count_substrings('aaa')

