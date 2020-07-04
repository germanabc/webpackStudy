import './assets/style.css';
console.log('我是a模块')
function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.classList.add('hello');

    return element;
  }

  document.body.appendChild(component());
// module.export={
//     "name":"aaa"
// }
export default {"name":"aaa"}
