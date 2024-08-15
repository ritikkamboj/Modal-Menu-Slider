const toggle = document.getElementById("bars");
const open = document.getElementById("open");
const close = document.getElementById("close");

const modal = document.getElementById("modal");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", ()=>{
    modal.classList.remove("show-modal");
})

// when we click on outside modal then also we want to remove the show-modal class

window.addEventListener('click',(e)=>{
    if(e.target === modal)
    {
        modal.classList.remove('show-modal');
    }
})