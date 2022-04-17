const txtInput = document.getElementById("input_from_user");
const checkBtn = document.getElementById("checkBtn");
const infoTxt = document.getElementById("info_txt");
let filterInput
checkBtn.addEventListener('click',function(){
    infoTxt.style.display="block";
    let reverse=filterInput.split("").reverse().join("");
    if(reverse!=filterInput){
        return infoTxt.innerHTML=`No,<span>${txtInput.value}</span> isn't a palindrome!`;
    }
    else{
        return infoTxt.innerHTML=`Yes,<span>${txtInput.value}</span> is a palindrome!`;
    }
    
})
txtInput.addEventListener("keyup",function(){
    filterInput=txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    //removing speces and all special char from the entered value
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display="none";
    checkBtn.classList.remove("active");
})

