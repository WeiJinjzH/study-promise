new Promise(
    /* 执行器 executor */
    function(resolve, reject) {
        // 一段耗时很长的异步操作
        resolve() // 数据处理完成
        reject() // 数据处理出错
    }
).then(function A() {
    // 成功，下一步
}, function B() {
    // 失败，做相应处理
})

// promise是一个代理对象 它和原先要进行的操作并无关系
// 它通过引入一个回调，避免更多的回调

/* promise有三个状态
1. pending[待定] 初始状态
2. fulfilled[实现] 操作成功
3. rejected[被否决] 操作失败

当状态发生改变的时候，promise就会触发.then()里的函数处理后续步骤
promise状态一经改变，不会再变
*/