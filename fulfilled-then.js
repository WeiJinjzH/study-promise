console.log('start')

let promise = new Promise(res => {
    setTimeout(() => {
        console.log('the promise fulfilled')
        res('hello world')
    }, 1000)
})
setTimeout(() => {
    promise.then(value => {
        console.log(value)
    }, 3000)
})