// let rows = 10

// var star = '*';
// var i;
// var j;
// var k;

// // let patterns = ""; 

// for (i = 1; i <= rows; i++) {
//     for (j = rows; j > i; j--) {
//         document.write("&nbsp","nbsp");
//     }
//     // patterns += " ";
//     // document.write("<br>")


//     for (k = 1; k < 2 * i; k++) {
//         // document.write("*")
//         document.write('*');
//     }
//     document.write('<br>');
// }


// let rows = 5;

// // pattern variable carries the final pattern in string format
// // let pattern = "";

// // outer loop runs for `rows` no. of times
// for (let n = 1; n <= rows; n++) {
//     // Inner Loop - I -> prints spaces
//     for (let space = 1; space <= rows - n; space++) {
//         // pattern += " ";
//         document.write("*")
//     }
//     // document.write("<br>")  


//     // Inner Loop - II -> prints stars
//     for (let num = 1; num <= 2 * n - 1; num++) {
//         // pattern += "*";
//         document.write("*")
//     }
//     document.write("<br>")
//     // pattern += "\n";
//     // document.write("<br>")
// }
// console.log(pattern);

// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
var i;
var j;
var k;

for (let i = 1; i <= 13; i = i + 2) {

    for (let j = 19; j >= i; j--) {
        document.write("&nbsp;")
    }

    for (let k = 1; k <= i; k++) {
        document.write("&nbsp;")
        document.write("*")
    }
    document.write("<br>")
}


// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }