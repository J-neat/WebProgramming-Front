let ol = document.querySelector("ol");
function ramen() {
    let text = prompt();

    let newli = document.createElement("li");
    
    newli.innerHTML=text;

    // ol.appendChild(newli);

    ol.insertBefore(newli, ol.firstElementChild);
}

let ptag=document.querySelector("#ptag");

/*  1번 방식 프로퍼티
ptag.onmouseover = function() {
    ptag.style.backgroundColor="aqua"
}
function white() {
    ptag.style.backgroundColor="white";
}
ptag.onmouseout = white;
// ()를 적지 않는다. */

/*   2번 방식 리스너
ptag.addEventListener("mouseover",function(){
    ptag.style.backgroundColor="aqua"
});

function white() {
    ptag.style.backgroundColor="white";
}

ptag.addEventListener("mouseout",white); */

/* + 화살표함수도 가능
   + this.메소드 도 가능
    but, 화살표 + this는 불가능
    그래도 굳이굳이 사옹하고 싶다면 매개변수를 이용하자.

    매개변수.currentTarget.style
ptag.addEventListener('mouseover', ()=>{
    함수 내용 (화살표함수)
}) */