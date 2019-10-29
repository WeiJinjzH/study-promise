console.log('start')
new Promise(res => {
    console.log('step 1')
    setTimeout(() => {
        res(100)
    }, 1000)
}).then(res => {
    return new Promise(res => {
        console.log('step 1-1')
        setTimeout(() => {
            res(110)
        }, 1000)
    }).then(value => {
        console.log('step 1-2')
        return value
    }).then(res => {
        console.log('step 1-3')
        return res
    })
}).then(value => {
    console.log(value)
    console.log('step 2')
})
// 展开也很简单 返回Promise实例的那个直接就返回实例就好了，再把.then()往返回实例的那个then后面加