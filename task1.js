/* Task 1 */

var word = process.argv[2];
process.stdout.write(word.replace(/[ркн]/gi,'') + '\n');
