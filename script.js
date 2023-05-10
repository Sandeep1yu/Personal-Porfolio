console.log("hi this is a added js file.")

document.querySelector(".fa-xmark").style.display = 'none';
document.querySelector(".hamburger").addEventListener("click", () =>{
    document.querySelector(".sidebar").classList.toggle("sidebar-hide");
    if(document.querySelector(".sidebar").classList.contains("sidebar-hide")){
        document.querySelector(".fa-bars").style.display = 'inline';
        document.querySelector(".fa-xmark").style.display = 'none';
    }
    else{
        document.querySelector(".fa-bars").style.display = 'none';
        setTimeout(() => {
            document.querySelector(".fa-xmark").style.display = 'inline';
            
        }, 400);
    }

})