var string = "";
var buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string=""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            finalString = []
            splitString = string.split("")
            for(i=0;i<splitString.length-1;i++){
                finalString.push(splitString[i]+"")
            }
            string=finalString.join("")
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "+-"){
            string = eval(-string)
            document.querySelector('input').value = string;
        }
        else{ 
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})