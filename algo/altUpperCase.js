function capitalize(s){
    let split_str = s.split('')
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            console.log(split_str[i].toUpperCase())
        } 
    }
}


capitalize("abcdef")