/* 错误处理 */
/* 
Promise会自动捕获内部异常，并交给rejected响应函数处理

*/


console.log('here we go')
new Promise(res => {
    setTimeout(() => {
        throw new Error('bye')
    }, 2000)
}).then(value => {
    console.log(value + 'world')
}).catch(err => {
    console.log('Error:', err.message)
})