let myList=document.getElementById("myLists");


function addItem() {
    // 사용자로부터 입력 받기
    let item = prompt("다음 순서를 입력해주세요:");
  
    // 새로운 li 요소 생성
    let li = document.createElement("li");
  
    li.appendChild(document.createTextNode(item));
    document.getElementById("myList").appendChild(li);
  }
  