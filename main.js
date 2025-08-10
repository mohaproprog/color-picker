const colors = document.querySelector(".colors");
const inputText =  document.getElementById("inputText");
const addcustom =  document.getElementById("addcustom");
const sColor = document.querySelector(".sColor");
const copBtn = document.querySelector(".copBtn");
let color ="";
let validColor = "";
lastClickedColor = "";

addcustom.addEventListener("click",()=>{
    const value = inputText.value.trim();
    if (value == ""){
        alert("Please Add costom color first");

    }
    else if(!CSS.supports ("color",value)){
        if (sColor.textContent == "no color selected"){
            alert("please Select Valid color");
        }
        else{
            alert("please Select Valid color");
            sColor.textContent = `your last select Was : ${validColor}`
        }

    }
    else{
        validColor = value;
        lastClickedColor = value;
        sColor.textContent = `the color you selected is : ${value}`
        color = document.createElement('div');
        color.classList.add("color");
        color.style.background = inputText.value;
        colors.appendChild(color);

        color.addEventListener("click",function(){
            const colorcilicked = this.style.background;
            sColor.textContent = `the color you clicked is : ${colorcilicked}`
            lastClickedColor = colorcilicked;
        })
        
    }

})

copBtn.addEventListener("click",()=>{
    if(lastClickedColor){
        navigator.clipboard.writeText(lastClickedColor)
        .then(()=>{
            alert(`copied ${lastClickedColor}`);
        })
        .catch(()=>{
            alert("failed to copy")
        })
    }
    else{
        alert("No color selected");
    }
})