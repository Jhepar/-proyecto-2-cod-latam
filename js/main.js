const menuItem = document.querySelectorAll (".menu-item");



const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function(){
    document.body.classList.toggle("mobile-menu-active")
});



menuItem.forEach(function(Item){
    Item.addEventListener("click", function(e){
        const activeItem = document.querySelector (".active");
        activeItem.classList.remove("active");
        e.target.classList.add("active");
});
});

/* Boton para cambiar a modo oscuro */

const cambioBtn = document.querySelector("#btnModoDark");

cambioBtn.addEventListener("click", function(){
    document.body.classList.toggle("modo-dark");


});
