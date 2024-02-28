function Style() {
    let l = document.getElementsByTagName("li");
    for(let i=0; i< l.length; i++) {
        l[i].style.fontSize="20px";
    }
}

function BackColor() {
    let o = document.querySelector("body");
    o.style.backgroundColor="beige";
}