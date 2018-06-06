# Task 3

STR_K = [ 'one', 'some', 'many' ]
STR_S = Hash[*[STR_K, [ 'секунда', 'секунды', 'секунд' ]].transpose.flatten]
STR_M = Hash[*[STR_K, [ 'минута', 'минуты', 'минут' ]].transpose.flatten]
STR_H = Hash[*[STR_K, [ 'час', 'часа', 'часов' ]].transpose.flatten]

def num_to_string(num, temp)
  mod = num % 10
  return num.to_s + ' ' + (num > 10 && num < 20 || mod == 0 || mod >= 5 ?
                           temp['many'] : (mod == 1 ? temp['one'] : temp['some']))
end

t1 = ARGV[0].to_i
t2 = ARGV[1].to_i

time = t1 + t2
time_s = time % 60
time_m = (time / 60).floor % 60
time_h = (time / 3600).floor

puts (time_h.nonzero? ? num_to_string(time_h, STR_H) + ' ' : '') +
     (time_m.nonzero? ? num_to_string(time_m, STR_M) + ' ' : '') +
                        num_to_string(time_s, STR_S)

