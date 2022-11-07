const on = "Hi Im sn0opy"



alert(on)
const button = document.getElementById("go")
const container = document.getElementById("container")
const input = document.getElementsByName("text")
const i=document.getElementsByTagName("i")


container.addEventListener("click", (x) => {

    if (x.target.className == "fa-regular fa-trash-can trash icon") {


        x.target.parentElement.parentElement.remove()

    }
    else if (x.target.className == "fa-sharp fa-solid fa-face-angry angry icon") {

        x.target.style = ("display:none");
        const heart = ` <i class="fa-solid fa-heart icon"></i>`
        x.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.add("doo")
      
       
        x.target.parentElement.innerHTML += heart
    }
    else if (x.target.className == "fa-solid fa-heart icon") {

        x.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.remove("doo")
        x.target.classList.add("dd")
        const add=` <i class="fa-sharp fa-solid fa-face-angry angry icon"></i>`
        x.target.parentElement.innerHTML +=add

    }


    else if (x.target.className == "fa-solid fa-heart icon") {

        x.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.remove("doo")
        x.target.classList.add("dd")
        const add=` <i class="fa-sharp fa-solid fa-face-angry angry icon"></i>`
        x.target.parentElement.innerHTML +=add

    }

    else if (x.target.className == "fa-solid fa-star opicty icon") {

        
 
       x.target.classList.add("start")
       container.prepend(x.target.parentElement)

    } 
    else if(x.target.className =="fa-solid fa-star opicty icon start") {

        x.target.classList.add("s")
       
 
    container.append(x.target.parentElement)
     
    
console.log("ahmed")
   
} 
})













button.addEventListener("click", (x) => {

    x.preventDefault()
    const task = `
    <div class="task">
        <i class="fa-solid fa-star opicty icon"></i>
        <p class="text">
            ${input[0].value}
        </p>
        <div>
        <i class="fa-regular fa-trash-can trash icon"></i> 
        <i class="fa-sharp fa-solid fa-face-angry angry icon"></i>
        <!-- <i class="fa-solid fa-heart icon"></i> -->
        </div>
        
    </div>`


    container.innerHTML += (task)

    input[0].value = "   "




})