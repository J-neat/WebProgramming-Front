// let btn = document.querySelector('#btn');
//한 개
let sp = document.getElementsByTagName("span");
//여러개 배열
let n = 1;
function Style() {
    if(n==1) {
    for(let i=0; i<sp.length; i++) {
        sp[i].style.color="red";
        sp[i].style.fontSize="20px";
    }
    n=0;
}
    else { 
    for(let i=0; i<sp.length; i++) {
        sp[i].style.color="black";
        sp[i].style.fontSize="15px";    
        }
        n = 1;
    }

}
// 버튼을 누르면 폰트가 변경
// n값 변화로 함수 하나로 복귀까지 가능