interface Persecution {
    known : boolean;
    evidences : string[];
}

interface Content {
    names : string[];
    sites : string[];
    locations : string[];
    sources : string[];
    checked : boolean;
    persecution : Persecution;
}

interface Data {
    content : Content[];
    $schema : string;
}

function getContent() : Content[] {
    var e = new XMLHttpRequest();
    e.open('get', 'https://raw.githubusercontent.com/FunctionSir/TransDefenseProject/master/institute_list.json');
    e.send();
    return (JSON.parse(e.responseText) as Data).content;
}

window.addEventListener('DOMContentLoaded', function() {
    var content = getContent();
    content.forEach(function(e, i) {
        (document.querySelector('div#lists') as HTMLDivElement).appendChild(document.createElement('div'));
        ((document.querySelector('div#lists') as HTMLDivElement).lastChild as HTMLDivElement).classList.add('institution-block');
        var block = (document.querySelector('div#lists') as HTMLDivElement).lastChild as HTMLDivElement;
        var card = document.createElement('div') as HTMLDivElement;
        card.classList.add('institution-block-card');
        block.appendChild(card);
        card.appendChild(document.createElement('div') as HTMLDivElement);
        var card_txt = card.children.item[0] as HTMLDivElement;
        card_txt.classList.add('card-txt');
        card_txt.appendChild(document.createElement('div') as HTMLDivElement);
        var con = card_txt.firstChild as HTMLDivElement;
        e.names.forEach(function(e, i) {
            con.appendChild(document.createElement('p') as HTMLParagraphElement);
            (con.lastChild as HTMLParagraphElement).classList.add('names');
            (con.lastChild as HTMLParagraphElement).textContent = e;
        });
        e.sites.forEach(function(e, i) {
            con.appendChild(document.createElement('p') as HTMLParagraphElement);
            (con.lastChild as HTMLParagraphElement).classList.add('sites');
            (con.lastChild as HTMLParagraphElement).textContent = e;
        });
        if (!!e.persecution.known) {
            con.appendChild(document.createElement('a') as HTMLAnchorElement);
            (con.lastChild as HTMLAnchorElement).classList.add('persecution');
            (con.lastChild as HTMLAnchorElement).textContent = '⚠ 可能存在对跨性别者的迫害';
            if (!!e.persecution.evidences && (e.persecution.evidences.length > 0)) {
                (con.lastChild as HTMLAnchorElement).href = e.persecution.evidences[0];
            }
        }
        con.appendChild(document.createElement('p') as HTMLParagraphElement);
        (con.lastChild as HTMLParagraphElement).classList.add('infos');
        (con.lastChild as HTMLParagraphElement).textContent = '点击展开详情';
        con.appendChild(document.createElement('div') as HTMLDivElement);
        (con.lastChild as HTMLDivElement).classList.add('institution-info');
        var inf = con.lastChild as HTMLDivElement;
        inf.appendChild(document.createElement('p') as HTMLParagraphElement);
        (inf.lastChild as HTMLParagraphElement).classList.add('info-titles');
        (inf.lastChild as HTMLParagraphElement).textContent = '地址: ';
        e.locations.forEach(function (e, i) {
            inf.appendChild(document.createElement('p') as HTMLParagraphElement);
            (inf.lastChild as HTMLParagraphElement).classList.add('infos');
            (inf.lastChild as HTMLParagraphElement).textContent = e;
        });
        inf.appendChild(document.createElement('p') as HTMLParagraphElement);
        (inf.lastChild as HTMLParagraphElement).classList.add('info-titles');
        (inf.lastChild as HTMLParagraphElement).textContent = '来源: ';
        e.sources.forEach(function (e, i) {
            inf.appendChild(document.createElement('p') as HTMLParagraphElement);
            (inf.lastChild as HTMLParagraphElement).classList.add('infos');
            (inf.lastChild as HTMLParagraphElement).textContent = e;
        });
        card.addEventListener('click',() => {
            ShowInfo(card.children.item[0].lastChild);
        }, false);
    });
});