window.addEventListener('DOMContentLoaded',
  function(){
    //html5より前
    let id1 = document.getElementById('js-id1');
    id1.style.background = "red";

    //html5以降。
    //class -> .x ID -> #x 要素 -> そのまま
    let id2 = document.querySelector("#js-id2");
    id2.style.background = "#0e0";

  },false
);
