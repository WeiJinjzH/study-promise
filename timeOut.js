console.log('here we go')
new Promise(res => {
    setTimeout(() => {
        res('hello')
    }, 2000)
}).then(value => {
    console.log(`${value} world`)
})