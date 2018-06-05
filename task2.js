/* Task 2 */

var a = process.argv[2].split('');
var b = process.argv[3].split('');
var s = -1;

if (a.length === b.length) {
  for (let c = 0; c < a.length; c++) {
    if (a.every((x, i) => x === b[i])) {
      s = c;
      break;
    }
    a.push(a.shift());
  }
}

process.stdout.write((s > a.length - s ? a.length - s : s) + '\n');
