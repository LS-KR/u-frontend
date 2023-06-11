// 点击卡片展开详情
function ShowInfo(e) {
    //document.getElementById("info").classList.toggle("show");
    if (document.readyState === "complete")
        e.classList.toggle("show");
}

function HideInfo(e) {
    e.classList.toggle("hide");
}