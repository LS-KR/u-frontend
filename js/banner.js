window.onload = function() {
    const box = this.document.getElementsByClassName("banner")[0];
    const pic = box.getElementsByTagName("li");
    //图片切换
    function sw(i, j) {
        pic[i].style.opacity = 1;
        pic[j].style.opacity = 0;
    }
    //初始化
    sw(0, 1);
    let i = 0;
    //循环
    function auto() {
        if (++i >= 4) {
            i = 0;
            sw(0, 3);
        } else sw(i, i - 1);
    }
    //光标焦点控制
    let timer = this.setInterval(auto, 4000);
    box.onmouseover = function () {
        clearInterval(timer);
    }
    box.onmouseout = function () {
        timer = setInterval(auto, 4000);
    }
}