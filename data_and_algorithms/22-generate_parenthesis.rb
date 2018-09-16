def generate_parenthesis(n, str='', results=[])
  return if str.length > n * 2

  results << str if valid?(str) && str.length == n * 2

  generate_parenthesis(n, str + '(', results)
  generate_parenthesis(n, str + ')', results)

  results
end

def valid?(str)
  return false if str.length == 0 || str.length.odd?
  open_count = 0
  close_count = 0

  str.chars.each do |char|
    char == '(' ? open_count += 1 : close_count += 1

    return false if open_count < close_count
  end
  
  open_count == close_count
end

p generate_parenthesis(3)