console.time('time')

function simpleTransposition(text) {
    let row1 = []
    let row2 = []
    let arr = text.split('')
    
    let x = arr.filter((element, index) => {
        if(index % 2 === 0) {
            row1.push(element)
        } else {
            row2.push(element)
        }
    })

    

    console.log(row1.concat(row2))
    console.log(row2)
    console.log(arr)
}

console.timeEnd('time')

simpleTransposition("Sample text")


/*

Row 1	S	m	l		e	t
Row 2	i	p	e	t	x

*/