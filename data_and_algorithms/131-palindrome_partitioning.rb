def partition(s, length=s.length, palindromes=[], results=[])
  results << palindromes if palindromes.join.length == length

  1.upto(s.length).each do |i|
    next unless palindrome? s[0...i]
    partition(s[i..-1], length, palindromes + [s[0...i]], results)
  end

  results
end

def palindrome?(str)
  str.length <= 1 || str[0] == str[-1] && palindrome?(str[1..-2])
end


p partition('aabbbaaa')
