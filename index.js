// var portfolio = document.getElementById("web")
// portfolio.innerHTML="Welcome to my Works"

// var state = false

let menuIcon1 = document.getElementById("menuIcon")
let closeIcon = document.getElementById("closeIcon")
let myNav = document.getElementById("myNav")

function myNavBarEngine(state) {
    if (state === false) {
        menuIcon1.style.display="block"
        closeIcon.style.display="none"
        myNav.style.visibility="hidden"  
        
    }else{
        menuIcon1.style.display="none"
        closeIcon.style.display="block"
        myNav.style.visibility="visible"
        // myNav.style.display="block"
        closeIcon.style.visibility="visible"
    }
}
// myNavBarEngine(false)
// myNav.style.visibility="visible"

menuIcon1.addEventListener("click", ()=>{
    myNavBarEngine(true)
})
closeIcon.addEventListener("click", ()=>{
    myNavBarEngine(false)
})




