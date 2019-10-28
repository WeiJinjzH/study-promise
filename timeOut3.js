console.log('here we go')
new Promise(res => {
    setTimeout(() => {
        res('hello')     
    }, 2000)
}).then(value => {
    console.log(value)
    console.log('everyone')
    (function() {
        return new Promise(res => {
            setTimeout(() => {
                console.log('Mr.laurence')
                res('Merry Xmas')
            }, 2000)
        })
    }())
    return false
}).then(value => {
    console.log(value + 'world')
})