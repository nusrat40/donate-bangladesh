document.getElementById("btn-donation").addEventListener("click",function(){
    showSectionById("donation-form"); 
    addButtonColor("btn-donation");
    const footerPart =document.getElementById("footer");
  footerPart.classList.remove("hidden");

})

document.getElementById("btn-history").addEventListener("click",function(){
 showSectionById("history-form");
 addButtonColor("btn-history");
  const footerPart =document.getElementById("footer");
  footerPart.classList.add("hidden");

})

window.addEventListener("scroll",function(){
    const navBar = document.getElementById("nav-bar");
    if(window.scrollY>50)
    {
        navBar.classList.remove("bg-[#F9F7F3]");
         navBar.classList.add("blurred");
    }
    else{
        navBar.classList.add("bg-[#F9F7F3]");
    navBar.classList.remove("blurred");
    }

})
