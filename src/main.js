let html = document.querySelector("#html");
let style = document.querySelector('style');
let string = `
/* 你好，我叫蒋人杰
 * 接下来我向你展示一下我的前端功底
 * 先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接着我把这个 div 变成一个八卦图
 * 注意看好了
 * 首先，我得把它变成一个圆圈 
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦由两条阴阳鱼组成
 * 分别是一黑一白
*/
#div1{
    background: linear-gradient(90deg,rgba(255,255,255,1) 0% , rgba(255,255,255,1) 50% , rgba(0,0,0,1) 50% , rgba(0,0,0,1) 100%);
}
/* 先画出白色阴阳鱼的黑眼睛 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0% , rgba(0,0,0,1) 15% , rgba(255,255,255,1) 15% , rgba(255,255,255,1) 100%);
}
/* 再画出黑色阴阳鱼的白眼睛 */
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 15% , rgba(255,255,255,1) 15% , rgba(0,0,0,1) 10% , rgba(0,0,0,1) 100% );
}
`;
let string2 = '';

let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += "<br>";
        } else if (string[n] === ' ') {
            string2 += "&nbsp";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n + 1 < string.length) {
            n += 1;
            step();
        }
    }, 40);
};

step();