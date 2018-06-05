# Task 2

a = ARGV[0].split(//)
b = ARGV[1].split(//)
s = -1;

if a.length == b.length
  a.each_index do |c|
    if a == b
      s = c
      break
    end #if
    a.push(a.shift)
  end #do
end #if

puts s > a.length - s ? a.length - s : s
