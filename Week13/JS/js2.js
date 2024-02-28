function Line() {
    let hh = document.querySelectorAll("h3")
    //id나 class가 있으면 그 이름을 적는다
    for(let i =0; i<hh.length; i++) {
        hh[i].style.textDecorationLine = "underline";
    }
}

function Color() {
    let sp = document.getElementsByTagName("p")
    //1개여도 배열이다.
    for(let i =0; i<sp.length; i++) {
        sp[i].style.color = "gold";
    }
}