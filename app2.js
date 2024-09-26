var i;
var j;

for (i = 7; i > 0; i--) {
    document.write("</br>");
    for (j = -10; j < 8 - i; j++) {
        document.write("&nbsp;");
    }
    for (j = 8 - i; j <= 7; j++) {
        document.write("&nbsp;")
        document.write("*");
    }
}

















// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 11 - i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }




















// let rows = 5;

// // pattern variable carries the final pattern in string format
// let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//     // inner loop runs for n
//     for (let num = 1; num <= n; num++) {
//         pattern += num;
//         document.write("*")
//     }

//     // Add a new line character after contents of each line
//     pattern += "\n";
//     document.write("<br>")
// }
// console.log(pattern);
