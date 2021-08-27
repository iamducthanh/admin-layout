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