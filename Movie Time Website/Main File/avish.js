let header = document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

var  counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 6000);

//search....................

let searchbox=document.querySelector(".search-box");
let searchBtn=document.querySelector(".search-btn");
let search=document.querySelector(".search");
let closeBtn=document.querySelector(".close-btn");

searchBtn.addEventListener("click", function(){
   console.log (search.classList.contains("active"))
   if(search.classList.contains("active")){
    searchBox.value=""
   }else{
    search.classList.add("active");
   }
})

closeBtn.addEventListener("click", function(){
    search.classList.remove("active");
    searchBox.value="";
})

