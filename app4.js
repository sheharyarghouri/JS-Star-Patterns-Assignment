var i;
var j;
var k;

for (let i = 9; i >= 1; i = i - 2) {

    for (let j = 15; j >= i; j--) {
        document.write("&nbsp")
    }
    for (let k = 1; k <= i; k++) {
        document.write("*")
        document.write("&nbsp;")
    }
    document.write("<br>")
}



for (let i = 1; i < 10; i = i + 2) {

    for (let j = 15; j >= i; j--) {
        document.write("&nbsp;")
    }

    for (let k = 1; k <= i; k++) {
        document.write("*")
        document.write("&nbsp;")
    }
    document.write("<br>")
}
















































// for (let i=9; i>=1; i++) {
//     for (j=1; j<= 7 - i; j++) {
//         document.write("&nbsp;")
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for (i=1; i<=rows; i++) {
//     for (j=1; j<=i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }