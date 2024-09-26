// var i;
// var j;
// var k;

// for (let i = 1; i < 15; i = i + 2) {

//     for (let j = 15; j >= i; j--) {
//         document.write("&nbsp;")
//     }

//     for (let k = 1; k <= i; k++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
// // var i;
// // var j;

// for (let i = 7; i >= 1; i - 2) {

//     for (let j = 15; j >= i; j--) {
//         document.write("&nbsp;");
//     }
//     for (let k = 1; k <= i; k++) {
//         document.write("*");
//     }
//     document.write("<br>")
// }

var i;
var j;
var k;

for (let i = 1; i < 15; i = i + 2) {

    for (let j = 15; j >= i; j--) {
        document.write("&nbsp;")
    }

    for (let k = 1; k <= i; k++) {
        document.write("*")
        document.write("&nbsp;")
    }
    document.write("<br>")
}

for (let i = 15; i >= 1; i = i - 2) {

    for (let j = 15; j >= i; j--) {
        document.write("&nbsp")
    }
    for (let k = 1; k <= i; k++) {
        document.write("*")
        document.write("&nbsp;")
    }
    document.write("<br>")
}


// var i;
// var j;
// var k;
// let rows = 15;

// for (let i = 1; i <= rows - 1; i = i++) {

//     for (let j = 1; j <= i; j++) {
//         // document.write("&nbsp;")
//         document.write("*");
//     }
//     document.write("<br>");
// }

// for (let i = 1; i <= rows; i = i++) {

//     for (let j = 1; j <= 15 - i; j++) {
//         // document.write("&nbsp")   
//         document.write("*");
//     }
//     // document.write("&nbsp;")
//     document.write("<br>");
// }





































// let rows = 7
// var i;
// var j;

// for (i=1; i<=rows; i++) {
//     for (j=1; j<=i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for (i=1; i<=rows; i++) {
//     for (j=2; j<= 8 - i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


















// reverse trianle method

// var i;
// var j;
// // var k;

// // let rows = 5

// let pattern = "";

// for (i=1; i<=5; i++) {
//     for (j=5; j>=i; j--) {
//         pattern += j;
//         document.write("*");
//     }
//     document.write("<br>");
//     pattern += "\n";
// }
// console.log(pattern);