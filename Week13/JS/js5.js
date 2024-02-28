let pa = document.querySelector("#parent")

function Add() {
    let newtag =  document.createElement("div");
    //<div></div>
    newtag.innerHTML="안녕 난 추가됐어";
    //<div>안녕 난 추가됐어</div>
    newtag.setAttribute('id','did'); 
    //오류
    //<div id="did">안녕 난 추가됐어</div>
    pa.appendChild(newtag);
}