window.addEventListener('DOMContentLoaded', function() {
    var e = new XMLHttpRequest();
    e.open('get', 'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/%E6%88%92%E7%BD%91%E7%98%BE(%E5%8F%AF%E8%83%BD%E5%90%AB%E6%89%AD%E8%BD%AC%E6%B2%BB%E7%96%97)%E6%9C%BA%E6%9E%84%E5%88%97%E8%A1%A8.csv'),
        e.addEventListener('load',function() {
            var n = [],
                o = document.querySelector('div#lists');
            e.responseText.split('\n').forEach(function (e, t) {
                (n[t] = []),
                    e.split(',').forEach(function (e) {
                        n[t].push(e);
                    });
            }),
                n.pop();
            var a = [];
            n.forEach(function (e, i) {
                if (i != 0) {
                    var o0 = document.createElement('div');
                    o0.classList.add('institution-block');
                    o.appendChild(o0);
                    var a = o.lastChild;
                    var a0 = document.createElement('div');
                    a0.classList.add('institution-block-card');
                    a.appendChild(a0);
                    var b = a.children.item(0);
                    var b0 = document.createElement('div');
                    b0.classList.add('card-txt');
                    b.appendChild(b0);
                    var c = b.children.item(0);
                    c.appendChild(document.createElement('h1'));
                    c.lastChild.textContent = e[1];
                    c.appendChild(document.createElement('h4'));
                    c.lastChild.textContent = e[2];
                    c.appendChild(document.createElement('a'));
                    c.lastChild.textContent = '点击展开详情';
                    c.appendChild(document.createElement('div'));
                    var d = c.lastChild;
                    d.classList.add('institution-info');
                    d.appendChild(document.createElement('a'));
                    d.lastChild.textContent = '地址  ' + e[3];
                    d.appendChild(document.createElement('a'));
                    d.lastChild.textContent = '来源  ' + e[4];
                    d.appendChild(document.createElement('a'));
                    if (e[5] == "UNKNOWN")
                        d.lastChild.textContent = '可能存在的对跨性别者的迫害未知';
                    else if (e[5] == "TRUE")
                        d.lastChild.textContent = '存在对跨性别者的迫害';
                    else
                        d.lastChild.textContent = '可能存在对跨性别者的迫害:\n\t' + e[5];
                    if (e[6] != "NONE")
                    {
                        d.appendChild(document.createElement('a'));
                        d.lastChild.textContent = '相关证据';
                        d.lastChild.href = e[6];
                    }
                    d.appendChild(document.createElement('a'));
                    d.lastChild.textContent = '待审核: ' + e[7];
                    b.addEventListener("click", (event) => {
                        ShowInfo(b.children.item(0).lastChild);
                    }, false);
                }
            });
        }),
        e.send();
})