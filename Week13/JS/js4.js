let n =1;
let p = document.querySelector("p");
let ptag = document.querySelector("#ptag")
function hide() {
    let sp = document.getElementById("sp")
    //쿼리 셀렉터를 사용하고 싶으면 #을 사용?
    if (n==1) {
        sp.style.visibility="visible";
        n=0;
    }
    else {
        sp.style.visibility="hidden";
        n=1;
    }
    
}
function change(){
    // p.innerHTML="바꾸기 <h3>강조</h3>"
    p.innerText="바꾸기 <h3>강조</h3>"
    ptag.innerHTML=`그림 <img src="../IMG/dog" alt="이미지">`;
}