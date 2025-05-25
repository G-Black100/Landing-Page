let menu = document.getElementById("menu");
let menuBar = document.getElementById("menuBar");
let closeBtn = document.getElementById("closeBtn");

menuBar.addEventListener('click', () => {
    menu.style.display = "block"
    menuBar.style.display = "none"
    closeBtn.style.display = "block"    
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    menuBar.style.display = "block"
    closeBtn.style.display = "none"
})

window.addEventListener('click', (e) => {
    if(e.target === menu) {
        menu.style.display = "none"
    }
})