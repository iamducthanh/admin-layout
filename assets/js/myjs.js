function editMenu(){
    let left = document.getElementById("leftHH");
    let right = document.getElementById("rightHH");
    if(left.style.display == 'none'){
        left.style.display = 'unset';
        right.className = 'col-lg-9';
    } else {
        left.style.display = 'none';
        right.className = 'col-lg-12';
    }
}
let tabAddHH = document.getElementsByClassName("tabAddHH");
let headAddHH = document.getElementsByClassName("menuTab");
console.log(tabAddHH);
for(let i = 1;i<tabAddHH.length;i++){
    tabAddHH[i].style.display = 'none';
}
function onTabAddHH(index){
    for(let i = 0;i<tabAddHH.length;i++){
        if(i==index){
            headAddHH[i].style.borderBottom = '2px solid #564ab1'
            tabAddHH[i].style.display = 'unset';
        } else {
            headAddHH[i].style.borderBottom = '0px'
            tabAddHH[i].style.display = 'none';
        }
    }
}

function closeModalAddHH(){
    document.getElementById('modalAddHH').style.display = 'none'
}
function onModalAddHH(){
    document.getElementById('modalAddHH').style.display = 'unset'
}
document.getElementById("leftHH").style.display = 'none'
document.getElementById("rightHH").className = 'col-lg-12';