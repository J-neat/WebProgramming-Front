// 주의:querySelect와 다름
let clk=document.getElementById("clk");
let body=document.querySelector("body");

//괄호 주의
clk.addEventListener('click',()=>{
    // 새로운 태그 생성하려면 createElement사용
    let newtag = document.createElement('div');
    newtag.innerHTML="안녕하세요";
    //.style 의 속성을 넣은 것(빨간색 색상)
    // newtag.setAttribute("class", 'style');
    
    //위와 동일
    newtag.style.color="red";

    //appendchild는 항상 끝에 추가됨
    body.appendChild(newtag);
})