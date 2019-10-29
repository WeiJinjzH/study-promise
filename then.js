/* .then()函数 */
/* 
1、.then()接受两个函数作为参数，分别代表fulfilled和rejected
2、.then()返回一个新的Promise实例，所以它可以链式调用
3、当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行
4、状态响应函数可以返回新的Promise，或其它值
5、如果返回新的Promise，那么下一级.then()会在新的Promise状态改变之后执行
6、如果返回其它任何值，则会立刻执行
 */
