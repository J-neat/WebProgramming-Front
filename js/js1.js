let h1= document.querySelector("h1")
let hclass=document.querySelector(".hclass")
let hid=document.querySelector("#hid")

// 클릭시 색상변경
h1.onclick=function(){
    h1.style.color="red";
};

//위와 동일한 의미이다.(this를 사용한 것)
h1.onclick=function(){
    this.style.color="red";
};

//여러 이벤트를 사용(여기서는 this 사용 불가능함)
// hclass.addEventListener('click',()=>{
//     hclass.style.
//     backgroundColor="yellow"
// });

//좀 더 명확히 해주는 것
hclass.addEventListener('click',(event)=>{
    event.currentTarget.style.
    backgroundColor="yellow"
});

function color(x){
    x.style.color="green"
}