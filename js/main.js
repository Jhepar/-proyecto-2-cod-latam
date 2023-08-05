const menuItem = document.querySelectorAll (".menu-item");
menuItem.forEach(function(Item){
    Item.addEventListener("click", function(e){
        const activeItem = document.querySelector (".active");
        activeItem.classList.remove("active");
        e.target.classList.add("active");
   })
   });