console.log("hi");
document.querySelector("#sidebar-toggler").addEventListener("click",()=>{
    console.log("hello");
    document.querySelector("#sidebar-menu").classList.toggle("d-none");
})