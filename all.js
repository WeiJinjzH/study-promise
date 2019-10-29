/* Promise.all是批量执行 */
/* 
1、Promise.all([p1, p2, p3, ...])用于将多个Promise实例，包装成一个新的Promise实例，返回的是新的普通Promise
2、它接受一个数组作为参数，数组里面可以是Promise对象，也可以是别的值，只有Promise会等待状态改变
3、当所有子Promise都完成的时候，该Promise完成，返回的是全部值返回的值组成的数组
4、有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果
*/



console.log()
Promise.all([1, 2, 3]).then(all => {
    console.log('1:', all)
    return Promise.all([function() {
        console.log('aabb')
    }, 'bbaa', false])
}).then(all => {
    console.log('2:', all)
    let p1 = new Promise(res => {
        setTimeout(() => {
            res('I\'m P1')
        }, 1500)
    })
    let p2 = new Promise((res, rej) => {
        setTimeout(() => {
            rej('I\'m P2')
        }, 1450)
    })
    let p3 = new Promise((res, rej) => {
        setTimeout(() => {
            rej('I\'m P3')
        }, 3000)
    })
    return Promise.all([p1, p2, p3])
}).then(all => {
    console.log('all', all)
}).catch(err => {
    console.log('Catch:' + err)
})