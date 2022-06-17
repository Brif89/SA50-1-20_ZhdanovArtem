function knopka(){
    let elem = document.getElementById("red_block");
    let pos = 0;
    let top = 0;
    let time = setInterval (frame, 2);
    function frame(){
        if(pos==0 && top==0){
        speed_left = 5;
        speed_top = 0;
      }else if(pos== 1750 && top==0){
        speed_left = 0;
        speed_top = 5;
      }else if(pos== 1750 && top==250){
        speed_left = -5;
        speed_top = 0;
        }else if(pos==0 && top==250){
        speed_left = 0;
        speed_top = -5;
        }
        top=top+speed_top;
        elem.style.top = top + "px";
        pos=pos+speed_left;
        elem.style.left = pos + "px";
        }
    }
