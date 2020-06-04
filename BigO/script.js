// function addUpTo(n) {
//     let total = 0
//     for (let i = 0; i < n; i++) {
//         total += i
//     }
//     console.log(total)
// }

// addUpTo(9)

console.time('profile');

function addUpTo(n) {
    let total = 0
    for (let i = 0; i < n; i++) {
        total += i
    }
    console.log(total)
}

addUpTo(9)

var time = console.timeEnd('profile');
