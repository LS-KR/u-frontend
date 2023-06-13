window.addEventListener('DOMContentLoaded', function() {
    var e = new XMLHttpRequest();
    e.open('get', 'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/institute_list.json');
    e.addEventListener('load', function() {
        var objs = JSON.parse(e.responseText);
        var content = objs.content;
        content.forEach(function(e, i) {
            var names = e.names;
            var sites = e.sites;
            var locations = e.locations;
            var sources = e.sources;
            var checked = e.checked;
            var persecution_known  = null;
            var persecution_evidences = null;
            var s = "";
            //var persecution_known = e.persecution.known as boolean;
            //var persecution_evidences = e.persecution.evidences as Array<string>;
            try {
                persecution_known = e.persecution.known;
                persecution_evidences = e.persecution.evidences;
            }
            catch {}
            var o = document.querySelector('div#lists');
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
            s = "";
            names.forEach(function(e, i) {
                if (i == 0)
                    s = (e != undefined) ? e : "";
                else
                    s = s.concat('\n', e);
            });
            c.lastChild.textContent = s;
            c.appendChild(document.createElement('h4'));
            s = "";
            sites.forEach(function(e, i) {
                if (i == 0)
                    s = (e != undefined) ? e : "";
                else
                    s = s.concat('\n', e);
            });
            c.lastChild.textContent = s;
            c.appendChild(document.createElement('a'));
            c.lastChild.textContent = '点击展开详情';
            c.appendChild(document.createElement('div'));
            var d = c.lastChild;
            d.classList.add('institution-info');
            d.appendChild(document.createElement('a'));
            s = "";
            locations.forEach(function(e, i) {
                if (i == 0)
                    s = (e != undefined) ? e : "";
                else
                    s = s.concat('\n', e);
            });
            d.lastChild.textContent = '地址: \n' + s;
            d.appendChild(document.createElement('a'));
            s = "";
            sources.forEach(function(e, i) {
                if (i == 0)
                    s = (e != undefined) ? e : "";
                else 
                    s = s.concat('\n', e);
            });
            d.lastChild.textContent += '来源: \n' + s;
            if ((persecution_known != null) && (persecution_evidences != null) &&
                (persecution_known != undefined) && (persecution_evidences != undefined) &&
                (persecution_evidences.length != 0))
            {
                d.appendChild(document.createElement('a'));
                if (persecution_known) 
                    d.lastChild.textContent = '存在对跨性别者的迫害';
                d.appendChild(document.createElement('a'));
                d.lastChild.textContent = '相关证据';
                d.lastChild.href = persecution_evidences[0];
            }
            d.appendChild(document.createElement('a'));
            if (checked) d.lastChild.textContent = '已审核';
            else d.lastChild.textContent = '待审核';
            b.addEventListener('click', (event) => {
                ShowInfo(b.children.item(0).lastChild);
            }, false);
        });
    });
    e.send();
});