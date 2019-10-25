console.log('here we go')
new Promise(res => {
    setTimeout(() => {
        res('hello')
    }, 2000)
}).then(value => {
    console.log(value)
    return new Promise(res => {
        setTimeout(() => {
            res('world')
        }, 2000)
    })
}).then(value => {
    console.log(`${value} world`)
})