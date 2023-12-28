const img = document.querySelector('.img');
document.addEventListener('click',()=> {
    console.log("clicked")
    img.classList.toggle("opacity");
});
