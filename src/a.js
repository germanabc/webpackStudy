
import _ from 'lodash';
import './assets/style.css';
import './assets/bg.scss';
import './assets/fontSize.less';
import  Icon from './assets/icon.png';
console.log('我是a模块')
// cSonsole.log('我是a模块')
function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.classList.add('hello');
+   element.classList.add('fontSize');
+   element.classList.add('bg');

//将图像添加到我们现有的div
    var myIcon=new Image();
    myIcon.src=Icon
    element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());
// module.export={
//     "name":"aaa"
// }
export default {"name":"aaa"}
