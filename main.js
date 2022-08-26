let upload=document.querySelector('.icon-upload2');
let input= document.querySelector('input');
let container=document.querySelector('.head');





upload.addEventListener("click",(eo) => {
    eo.preventDefault();
    let task= `
<div class="task">
    <span class="icon-star icon"> </span>
    <p class="text">${input.value}</p>
    <div>
    <span class="icon-trash-o icon"> </span>
    <span class="icon-sad icon"> </span>
    </div>
</div>
    `
    container.innerHTML += task;
    input.value=""

});

container.addEventListener("click",(eo)=>{
switch (eo.target.className) {
    case "icon-trash-o icon": 
    eo.target.parentElement.parentElement.remove();
        
        break;
        case "icon-sad icon":
            eo.target.classList.add("dn");
        let heart=`<span class="icon-heart"></span> `

        eo.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.add("finish");

        
        eo.target.parentElement.innerHTML += heart
        
        break;
        case "icon-heart":
            eo.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.remove("finish");
            eo.target.classList.add("dn");
            let sad=`<span class="icon-sad icon"> </span>`
            eo.target.parentElement.innerHTML += sad
    
        
        break;
        case"icon-star icon":
        eo.target.classList.add("yeloo");
        container.prepend(eo.target.parentElement);
        
        break;

}
})
