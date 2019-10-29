console.log('here we go')
new Promise(res => {
    setTimeout(() => {
        throw new Error('bye')
    }, 2000)
}).then(value => {
    console.log(value + 'world')
}, value => {
    console.log('Error:' + value)
})

/* 错误处理的两种做法 */
/* 
reject('错误信息').then((null, message) => {

})

throw new Error('错误信息').catch(message => {})
*/