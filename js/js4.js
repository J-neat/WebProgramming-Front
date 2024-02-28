let exp=document.getElementById("exp");
let btn=document.querySelector("#btn");
let result=document.querySelectorAll("input[type=text]");//속성별로 가져오기


btn.onclick=function(){
    let ans = eval(exp.value)//수식으로 변경한 후 그 결과를 ans에 저장
    result[1].value = ans//result에는 식과 결과를 둘 다 가져오기 때문에 인덱스 상 1인 걸 가져와야 결과를 가져온다.
};

