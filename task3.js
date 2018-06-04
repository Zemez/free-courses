/* Task 3 */

const STR_S = { one: 'секунда', some: 'секунды', many: 'секунд' };
const STR_M = { one: 'минута', some: 'минуты', many: 'минут' };
const STR_H = { one: 'час', some: 'часа', many: 'часов' };

var t1 = Number(process.argv[2]);
var t2 = Number(process.argv[3]);

var time = t1 + t2;
var timeS = time % 60;
var timeM = Math.floor(time / 60) % 60;
var timeH = Math.floor(time / 3600);

process.stdout.write((timeH ? numToString(timeH, STR_H) + ' ' : '') +
                     (timeM ? numToString(timeM, STR_M) + ' ' : '') +
                              numToString(timeS, STR_S) + '\n');
process.exit(0);

/**/
function numToString(num, temp) {
  mod = num % 10;
  return num + ' ' + (num > 10 && num < 20 || mod == 0 || mod >= 5 ?
                      temp.many : (mod == 1 ? temp.one : temp.some));
}

