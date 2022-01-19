const Bnumber   = document.querySelectorAll(".num"),
    op          = document.querySelectorAll(".op"),
    erase       = document.querySelector(".erase"),
    resume      = document.querySelector('.resume'),
    clear       = document.querySelector(".clear");

const p = document.querySelector("p")

for(let btn of Bnumber){
    btn.addEventListener("click",(e)=>{
        if( p.textContent == 0){
            p.textContent = btn.textContent;
            return;
        }
        p.textContent += btn.textContent;
    });
}

for(let operacion of op){
    operacion.addEventListener("click",(e)=>{
        p.textContent += operacion.textContent;
    });
}


resume.addEventListener("click",(e)=>{
    p.textContent = eval( p.textContent);
});

erase.addEventListener("click",(e)=>{
    
    p.textContent =  p.textContent.slice(0,p.textContent.length-1);
    console.log(p)
    if(p.textContent == ""){
        p.textContent= "0";
    }
});

clear.addEventListener("click",e=>{
    p.textContent = "0";
})
