var ques=document.querySelectorAll(".course");
//console.log(ques);
var icon=document.querySelector("i");
//console.log(icon)


ques.forEach(function(del){
    del.addEventListener("click",function(){
        if(del.nextElementSibling.classList.contains("active")){
            del.nextElementSibling.classList.remove("active");
        }
        else{
            del.nextElementSibling.classList.add("active");
        }
    })
})

icon.addEventListener("click",function(e){

    e.target.parentNode.classList.add("active");
}
)