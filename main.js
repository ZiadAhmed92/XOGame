let turn ='x';
let arr=[];
let header= document.querySelector(".header");
//--------------------------------------
function end(one,two,there){
document.getElementById("z"+one).style.background='rgb(176, 152, 152)';
document.getElementById("z"+two).style.background='rgb(176, 152, 152)';
document.getElementById("z"+there).style.background='rgb(176, 152, 152)';
setInterval(()=>header.innerHTML+=".",1000);
setTimeout(()=>location.reload(),4000);
}
//-------------------------------------
function start(z){
for(i=1;i<10;i++){
arr[i]=document.getElementById("z"+i).innerHTML;
}
if(arr[1]==arr[2]&& arr[2]==arr[3]&& arr[2]!=''){
    header.innerHTML=`${arr[1]} winner`;
    end(1,2,3);
}else if(arr[4]==arr[5]&& arr[5]==arr[6]&& arr[4]!=''){
    header.innerHTML=`${arr[4]} winner`;
    end(4,5,6);
}
else if(arr[7]==arr[8]&& arr[8]==arr[9]&& arr[8]!=''){
    header.innerHTML=`${arr[7]} winner`;
    end(7,8,9);
}
else if(arr[1]==arr[4]&& arr[4]==arr[7]&& arr[4]!=''){
    header.innerHTML=`${arr[1]} winner`;
    end(1,4,7);
}
else if(arr[2]==arr[5]&& arr[5]==arr[8]&& arr[5]!=''){
    header.innerHTML=`${arr[2]} winner`;
    end(2,5,8);
}
else if(arr[3]==arr[6]&& arr[6]==arr[9]&& arr[6]!=''){
    header.innerHTML=`${arr[6]} winner`;
    end(3,6,9);
}
else if(arr[1]==arr[5]&& arr[5]==arr[9]&& arr[5]!=''){
    header.innerHTML=`${arr[5]} winner`;
    end(1,5,9);
}
else if(arr[3]==arr[5]&& arr[5]==arr[7]&& arr[5]!=''){
    header.innerHTML=`${arr[5]} winner`;
    end(3,5,7);
}

}
function game(param){
let div = document.getElementById(param);
if(turn=='x' && div.innerHTML == ''){
div.innerHTML="x";
header.innerHTML='O';
turn='o';

}else if(turn=='o'&& div.innerHTML == ''){
    div.innerHTML="O";
    header.innerHTML='X';
    turn='x'
}
}